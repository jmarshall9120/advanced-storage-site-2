import {type Ref, ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'

import {generateClient} from 'aws-amplify/data'
import {type Schema} from '~/../amplify/data/resource'
import {useDataStore} from '~/stores/data'

export const useUnitsStore = defineStore('units', () => {

  const client = generateClient<Schema>();
  const dataStore = useDataStore()


  // UNITS 
  /////////////////////////////////////////////////////////////////////////
  type Unit = Schema['Unit']['type']
  const units = ref<Array<Unit>>([])
  async function _fetch_units() : Promise<Array<Unit>> {
    const {data: _units, errors} = await client.models.Unit.list({
      authMode: 'userPool'
    })
    if (errors){
      throw new Error(errors.toString())
    }
    return _units
  }

  async function load_units(force_refresh:Boolean=false) : Promise<void> {
    const _units = await _fetch_units()
    units.value = _units
  }

  // Locations
  /////////////////////////////////////////////////////////////////////////
  type Location = Schema['Location']['type']
  const locations = ref<Array<Location>>([])
  const location_idx = ref<number>(0)

  async function _fetch_locations() : Promise<Array<Location>> {
    const {data: _locations, errors} = await client.models.Location.list({
      selectionSet: [
        "id",
        "name",
        "physical_address_1",
        "physical_address_2",
        "physical_city",
        "physical_state",
        "physical_postal_code",
        "physical_country",
        "company_id",
        "buildings.*",
        "buildings.units.*"
      ],
      authMode: 'userPool'
    })
    if (errors) {
      throw new Error(errors.toString())
    }
    return _locations as unknown as Promise<Array<Location>>
  }

  async function load_locations(force_refresh:Boolean=false) : Promise<void> {
    const _locations = await _fetch_locations()
    locations.value = _locations;
  }

  type LocationView = {
    id: String,
    name: String,
    physical_address_1: String,
    physical_address_2: String,
    physical_city: String,
    physical_state: String,
    physical_postal_code: String,
    physical_country: String
    company_id: String
  }
  const locations_view = computed(()=>{
    return locations.value.reduce((
        prev: {[key: string]: LocationView}, 
        curr:Location
    ) => {
      prev[curr.id] = {
        id: curr.id,
        name: curr.name,
        physical_address_1: <String>curr.physical_address_1,
        physical_address_2: <String>curr.physical_address_2,
        physical_city: <String>curr.physical_city,
        physical_state: <String>curr.physical_state,
        physical_postal_code: <String>curr.physical_postal_code,
        physical_country: <String>curr.physical_country,
        company_id: <String>curr.company_id
      }
      return prev
    }, {})
  })

  type UnitFlattened = {
    id: string,
    name: string,
    width: number,
    depth: number,
    height: number,
    basis_price: number,
    uom: string,
    currency: string,
    is_available: boolean,
    building_name: string,
    location_name: string,
    building_id: string,
    location_id: string,
    company_id: string,
    modifiedAt: string,
    createdAt: string
  }
  type Building = Schema['Building']['type']
  const isNumeric = (num:String) : Boolean => /^-?[0-9]+(?:\.[0-9]+)?$/.test(num+'');

  const units_flattened_by_location_view = computed(()=>{
    const _flat_units =  locations.value.reduce((
        prev: Array<any>, 
        curr:Location
      ) : Array<UnitFlattened> =>{
      let _buildings = <Array<Building>><unknown>curr.buildings
      for(let i=0; i < _buildings.length; i++){
        let _units = <Array<Unit>><unknown> _buildings[i].units
        for (let j=0; j < _units.length; j++){
          prev.push({
            company_id: curr.company_id,
            location_id: curr.id,
            location_name: curr.name,
            // building_id: buildings[i].id,
            building_name: _buildings[i].name,
            ..._units[j]
          })
        }
      }
      prev.push({})
      return prev
    },[])
    const naturalCollator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    _flat_units.sort((
      a:UnitFlattened, 
      b:UnitFlattened
    ) : number => naturalCollator.compare(a.name, b.name))
    return _flat_units
  })

  const location = computed(()=> {
    return locations.value.length > 0 ? locations.value[location_idx.value] : undefined
  })

  return {
    units,
    load_units,
    locations,
    load_locations,
    locations_view,
    units_flattened_by_location_view
  }
})