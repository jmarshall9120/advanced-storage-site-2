<template>
  <v-container>
    <!-- current business heading -->
    <!-- --------------------------------------------------------------------- -->
    <v-row>
      <v-col>
        <v-menu>
          <template #activator="{props}">
            <v-btn flat title append-icon="mdi-chevron-down" v-bind="props">
              {{ dataStore?.company?.name }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in dataStore.companies"
              :key="index"
              >{{ item.name }}</v-list-item
            >
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <!-- location selector -->
    <!-- --------------------------------------------------------------------- -->
    <v-row>
      <v-col>
        <v-card>
          <v-dialog v-model="location_dialog_show">
            <v-card>
              <v-card-title>
                <v-row justify="space-between">
                  <v-col>
                    {{ location_dialog_title }}
                  </v-col>
                  <v-col align="right">
                    <v-btn
                      icon="mdi-close"
                      flat
                      @click="onLocationDialogClose"
                    ></v-btn>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-card-text>
                <v-row>
                  <v-col>{{ location_dialog_message }}</v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="Name"
                      v-model="location_dialog_item.name"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="Address 1"
                      v-model="location_dialog_item.physical_address_1"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="Address 2"
                      v-model="location_dialog_item.physical_address_2"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="City"
                      v-model="location_dialog_item.physical_city"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="State"
                      v-model="location_dialog_item.physical_state"
                    ></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field
                      label="Postal Code"
                      v-model="location_dialog_item.physical_postal_code"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="Country"
                      v-model="location_dialog_item.physical_country"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn color="success" @click="onLocationDialogConfirm">{{
                  location_dialog_confirm_button_text
                }}</v-btn>
                <v-btn color="error" @click="onLocationDialogClose"
                  >Cancel</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-card-title>
            <TableCardHeader
              title="Locations"
              @edit="onEditClick"
              @new="onNewClick"
            ></TableCardHeader>
          </v-card-title>
          <v-data-table-server
            :headers="location_table_headers"
            :items="location_table_data"
            :itemsLength="location_table_count"
            select-strategy="single"
            show-select
            v-model="selected_location"
            density="compact"
          >
          </v-data-table-server>
        </v-card>
      </v-col>
      <v-col>
        <SimpleCrudTable 
          title="Buildings" 
          :headers="buildings_table_headers"
          :indexed_data="buildings_indexed_view"
          :getDefaultItem="building_get_default_item"
          v-model:selectedItem="buildings_selected_item"
          v-model:show-dialog="buildings_dialog_show"
          @edit="onBuildingsEditClick"
          @new="onBuildingsNewClick"
          >
          <template #form>
            <v-row>
              <v-col>
                <v-text-field 
                  label="name"
                  v-model="building_dialog_dialog_item.name"
                ></v-text-field>
              </v-col>
            </v-row>
          </template>
        </SimpleCrudTable>
        <!-- <v-card>
          <v-card-title>Building Data</v-card-title>
          <v-card-text>{{ selected_building }}</v-card-text>
          <v-data-table-server
            :headers="buildings_table_headers"
            :items="buildings_view"
            :itemsLength="buildings_table_count"
            select-strategy="single"
            show-select
            v-model="selected_building"
            density="compact"
          ></v-data-table-server>
        </v-card> -->
      </v-col>
    </v-row>
    <!-- unit selector -->
    <!-- --------------------------------------------------------------------- -->
    <v-row>
      <v-col>
          <SimpleCrudTable 
          title="Units" 
          :headers="units_table_headers"
          :indexed_data="units_indexed_view"
          :getDefaultItem="building_get_default_item"
          v-model:selectedItem="selected_unit"
          v-model:show-dialog="unit_dialog_show"
          @edit="onUnitsEditClick"
          @new="onUnitsNewClick"
          @pageUpdated="load_units"
          >
          <template #form>
            <v-row>
              <v-col>
                <v-text-field 
                  label="Name"
                  v-model="unit_dialog_selected_unit.name"
                ></v-text-field>
                <v-text-field 
                  label="Width"
                  v-model="unit_dialog_selected_unit.width"
                ></v-text-field>
                <v-text-field 
                  label="Depth"
                  v-model="unit_dialog_selected_unit.depth"
                ></v-text-field>
                <v-text-field 
                  label="Height"
                  v-model="unit_dialog_selected_unit.height"
                ></v-text-field>
                <v-text-field 
                  label="Basis Price"
                  v-model="unit_dialog_selected_unit.basis_price"
                ></v-text-field>
              </v-col>
            </v-row>
          </template>
        </SimpleCrudTable>
          <!-- <v-card-title>Units</v-card-title>
          <v-data-table-server
            :headers="units_headers"
            :items="paginated_units"
            :itemsLength="units_count"
            select-strategy="single"
            show-select
            v-model="selected_unit"
            density="compact"
            @update:options="load_units"
          >
          </v-data-table-server> -->
          <!-- <v-card-text>{{ units_view }}</v-card-text> -->
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">

import TableCardHeader from '~/components/TableCardHeader.vue'
import SimpleCrudTable from '~/components/SimpleCrudTable.vue'

import { ref, computed, watch, onMounted } from "vue";
import { useDataStore } from "~/stores/data";
import { useUnitsStore, type LocationView, type UnitFlattened } from "~/stores/units";
import type {Location, Building} from '~/types/index'

const dataStore = useDataStore();
const unitsStore = useUnitsStore();

// Location
//////////////////////////////////////////////////////////////////////////////

enum CRUD_OPERATION {
  CREATE,
  UPDATE,
  DELETE
}
const location_dialog_show = ref<boolean>(false);
const location_dialog_operation = ref<CRUD_OPERATION>(CRUD_OPERATION.CREATE);
const location_dialog_message = ref<string>('')
const location_dialog_title = computed(() => {
  let _return_value: string;
  switch (location_dialog_operation.value) {
    case CRUD_OPERATION.CREATE:
      _return_value = 'New Location';
      break;
    case CRUD_OPERATION.UPDATE:
      _return_value = 'Edit Location';
      break;
    default:
      throw new Error('CRUD operation not recognized')
  }
  return _return_value
})
const location_dialog_confirm_button_text = computed(()=>{
  let _return_value: string;
  switch (location_dialog_operation.value) {
    case CRUD_OPERATION.CREATE:
      _return_value = 'Create';
      break;
    case CRUD_OPERATION.UPDATE:
      _return_value = 'Save Edit';
      break;
    default:
      throw new Error('CRUD operation not recognized')
  }
  return _return_value
})

interface NullLocation extends Omit<Location , 'id' | 'name' | 'company_id' | 'company' | 'buildings'> {
  id: string | undefined,
  name: string | undefined,
  company_id: string | undefined
}

function get_default_location_dialog_item() : NullLocation {
  return {
    id: '',
    name: '',
    physical_address_1: '',
    physical_address_2: '',
    physical_city: '',
    physical_state: null,
    physical_postal_code: '',
    physical_country: '',
    company_id: '', // required
    // company: Company | Function | null | undefined,
    // buildings: Array<Building> | Function | null | undefined
    __type: 'Location',
    modifiedAt: '',
    createdAt: ''
  }
}
const location_dialog_item = ref<NullLocation>(get_default_location_dialog_item())

const selected_location = ref<Array<Location>>([])
const location_table_headers = [
  {title: 'Name', align: 'start', key: 'name'},
  {title: 'Address', align: 'end', key: 'physical_address_1'},
  {title: 'City', align: 'end', key: 'physical_city'}
];

const location_table_data = computed(()=>{
  if (!unitsStore.locations_view){
    return []
  }
  return Object.values(unitsStore.locations_view)
})

const location_table_count = computed(()=>{
  if (!unitsStore.locations_view){
    return 0
  }
  return Object.keys(unitsStore.locations_view).length
});

function onEditClick() : void {
  location_dialog_operation.value = CRUD_OPERATION.UPDATE
  const _selected_item = unitsStore.locations_view[selected_location.value[0]]
  location_dialog_item.value = {
    ...get_default_location_dialog_item(),
    ..._selected_item
  }
  location_dialog_show.value = true
}

function onNewClick(){
  location_dialog_item.value = {
    ...get_default_location_dialog_item(),
  }
  location_dialog_operation.value = CRUD_OPERATION.CREATE
  location_dialog_show.value = true
}

function onLocationDialogClose() {
  location_dialog_show.value = false
}

function _createNewLocation(){}
function _updateLocation(){}

function onLocationDialogConfirm() : void {
  switch (location_dialog_operation.value) {
    case CRUD_OPERATION.CREATE:
      _createNewLocation()
      onLocationDialogClose()
      break;
    case CRUD_OPERATION.UPDATE:
      _updateLocation()
      onLocationDialogClose()
      break;
    default:
      throw new Error('CRUD operation not recognized')
  }
  return
}

// MARK: Buildings
// Buildings
///////////////////////////////////////////////////////////////////////////////

const buildings_dialog_show = ref<boolean>(false)
const buildings_selected_item = ref({})
const buildings_table_headers = [
  {title: 'Name', align: 'start', key: 'name'}
]

const buildings_view = computed(()=>{
  if (!unitsStore.locations_view || selected_location.value.length === 0){
    return []
  }
  console.log('locations_view loaded: ', !unitsStore.locations_view)
  console.log('location_selected loaded: ', !selected_location.value)
  console.log('location selected: ', selected_location.value)
  const _lookup_val : string = selected_location.value[0]
  const _buildings = unitsStore.locations_view[_lookup_val].buildings
  const _buildings_only = _buildings.map((_) => {
    return Object.fromEntries(
      Object.entries(_).filter(([key, value])=>{return key !== 'units'})
    )
  })
  const naturalCollator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
  _buildings_only.sort((a,b)=>naturalCollator.compare(a.name, b.name))
  return _buildings_only
});

const buildings_indexed_view = computed(() => {
  if (buildings_view.value.length === 0){
    return []
  }
  return buildings_view.value.reduce((prev, curr) => {
    prev[curr.id] = curr
    return prev
  }, {})
})

const buildings_table_count = computed(()=>{
  if (Object.keys(buildings_view).length===0){
    return 0
  }
  return buildings_view.value.length
})

interface NullBuilding extends Building {
  id:string,
  name: string,
  location_id: string,
}

// Building Dialog Item
////////////////////////////////////////////////////
const building_dialog_dialog_item = ref<NullBuilding>({})
function building_get_default_item() : NullBuilding {
  return {
    id: '',
    name: '',
    location_id: '',
  }
}

function onBuildingsEditClick(){
  console.log('OnEdit click caught')
  building_dialog_dialog_item.value = {...building_get_default_item(), ...buildings_selected_item.value}
}
function onBuildingsNewClick(){
  building_dialog_dialog_item.value = building_get_default_item();
}

// Units
///////////////////////////////////////////////////////////////////////////////

// const units_page = ref<number>(1)
// const units_items_per_page = ref<number>(10)
const selected_unit = ref({})
const unit_dialog_show = ref<boolean>(false)
const paginated_units = ref<UnitFlattenedTransformed[]>([])
const units_table_headers = [
  {title: 'Name', align: 'start', key: 'name'},
  {title: 'Width', align: 'end', key: 'width'},
  {title: 'Depth', align: 'end', key: 'depth'},
  {title: 'Height', align: 'start', key: 'height'},
  {title: 'Basis Price', align: 'start', key: 'basis_price'}
]

const units_indexed_view = computed(()=>{
  return units_view.value.reduce((prev, curr) => {
    prev[curr.id] = curr
    return prev
  },{})
})

const _uom_map : {[key: string]: string} = {
  'IN': '\"',
  'FT': '\''
}

const _currency_map : {[key: string]: string} = {
  'US': '$'
}

const units_in_building = computed(() : Array<UnitFlattened> =>{
  if (Object.keys(buildings_selected_item.value).length === 0){
    return []
  }
  const _units = unitsStore.units_flattened_by_location_view.filter((_)=> {
    return _.building_id == buildings_selected_item.value.id
  })
  console.log('Units in building length: ', _units.length)
  return _units
})

watch(buildings_selected_item, (oldVal, newVal)=>{
  load_units({page:1, itemsPerPage:10, sortBy:'name'})
})

interface UnitFlattenedTransformed extends Omit<UnitFlattened, 'width' | 'depth' | 'height' | 'basis_price'> {
  width: string,
  depth: string,
  height: string,
  basis_price: string,
}
const units_view = computed((): Array<UnitFlattenedTransformed> => {
  if (units_in_building.value.length === 0){
    return []
  }
  // return _units
  const _transformed_units = units_in_building.value.map((_)=>{
    return {
      ..._,
      ...{
        width: `${_.width}${_uom_map[_.uom]}`,
        depth: `${_.depth}${_uom_map[_.uom]}`,
        height: `${_.height}${_uom_map[_.uom]}`,
        basis_price: `${_currency_map[_.currency]}${_.basis_price}`
      }
    }
  })
  return _transformed_units
})

function load_units({page, itemsPerPage, sortBy} : {page: number, itemsPerPage: number, sortBy: string}){
  const _start = (page - 1) * itemsPerPage
  const _end = _start + itemsPerPage
  console.log('START: ', _start)
  console.log('END: ', _end)
  // sort
  // const naturalCollator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
  // const _units_sorted = units_view.value.sort(a,b=>naturalCollator.compare(a[sortBy], b[sortBy]))

  // slice data
  console.log('UnitsView length: ', units_view.value.length)
  const _sliced_units = units_view.value.slice(_start, _end)
  console.log('sliced length: ', _sliced_units.length)
  paginated_units.value = _sliced_units
}

function units_dialog_get_default_item(){
  return {
    name: '',
    width: '',
    depth: '',
    basis_price: ''
  }
}
const unit_dialog_selected_unit = ref({})
function onUnitsEditClick(){
  unit_dialog_selected_unit.value = {...unit_dialog_selected_unit(), ...selected_unit.value}
}
function onUnitsNewClick(){
  unit_dialog_selected_unit.value = unit_dialog_selected_unit()
}

// const units_count = computed(()=>{
//   if (units_in_building.value.length === 0){
//     return 0
//   }
//   return units_in_building.value.length
// })

onMounted(async () => {
  await dataStore.loadCompanies();
  await unitsStore.load_locations();
});
</script>
<style></style>
