<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-dialog v-model="dialog_show">
            <v-card>
              <v-card-title>
                <v-row justify="space-between">
                  <v-col>
                    {{ dialog_title }}
                  </v-col>
                  <v-col align="right">
                    <v-btn
                      icon="mdi-close"
                      flat
                      @click="onCloseDialogClick"
                    ></v-btn>
                  </v-col>
                </v-row>
              </v-card-title>
              <v-card-text>
                <v-row
                  ><v-col>{{ dialog_message }}</v-col></v-row
                >
                <slot name="form"></slot>
              </v-card-text>
              <v-card-actions>
                <v-btn color="success" @click="onConfirmClick">{{
                  dialog_confirm_text
                }}</v-btn>
                <v-btn color="error" @click="onCloseDialogClick"
                  >Cancel</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
          <!--  Data Table -->
          <!-- --------------------------------------------------------------------------------- -->
          <v-card-title>
            <TableCardHeader :title="title" @edit="onEditClick" @new="onNewClick"></TableCardHeader>
          </v-card-title>
          <v-card-text>
            <v-data-table-server
            select-strategy="single"
            :headers="headers"
            :items="display_data"
            :itemsLength="table_count"
            :model-value="selected_item_idx"
            show-select
            density="compact"
            @update:model-value="onSelectedItemUpdate"
            ></v-data-table-server>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import TableCardHeader from "~/components/TableCardHeader.vue";

import { ref, computed, onMounted } from "vue";

enum CRUD_OPERATION {
  CREATE,
  UPDATE,
  DELETE
}
interface IndexedData<T> {
  [id: string]: T
}

type IndexedDataArray<U> = IndexedData<U>[]


interface Header {
  title: string, 
  align: string, 
  key: (string & {})
}

type Headers = Header[]

// PROPS
const props = defineProps<{
  title: string,
  headers: object,
  indexed_data: IndexedData<object>,
  getDefaultItem: Function
}>()

// EMITS
const emit = defineEmits<{
  (e: 'create', payload: object): void,
  (e: 'update', payload: object): void,
  (e: 'closeDialog'): void,
  (e: 'itemSelected', item: object) : void,
  (e: 'dialogOpened') : void,
  (e: 'dialogClosed') : void,
  (e: 'edit') : void,
  (e: 'new') : void
}>();


const table_count = computed(()=>{
  return Object.keys(props.indexed_data).length
});

// Dialog open close
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const showDialog = defineModel('showDialog')
const _dialog_show = ref<bool>(false)
function onDialogShowUpdate(val){
  if (showDialog === undefined){
    dialog_show.value = val
  } else {
    showDialog.value = val
  }
}
const dialog_show = computed({
  get: () : boolean => {
    console.log('dialog_show - get: ', showDialog.value)
    if (showDialog.value === undefined){
      console.log('dialog_show - no private route')
      return _dialog_show.value
    } else {
      console.log('dialog_show - v-model route')
      return showDialog.value
    }
  },
  set: (val:boolean) : void => {
    console.log('dialog_show - set: ')
    if (showDialog.value === undefined){
      console.log('dialog_show - no private route')
      return _dialog_show.value = val
    } else {
      console.log('dialog_show - v-model route')
      showDialog.value = val
    }
  }
})


// SELECTED ITEM
/////////////////////////////////////////////////////////////////////////////////////
const selectedItem = defineModel('selectedItem')
const display_data = computed(()=>{
  return Object.values(props.indexed_data)
})

// const selected_item_idx = ref<string[]>([]);
const _selected_item_idx = ref<string[]>([]);
const selected_item_idx = computed({
  get: () => {
    console.log('targeted getter called.')
    if (selectedItem.value === undefined){
      return _selected_item_idx.value;
    }
    else {
      console.log('targeted getter called Using strat')
      const _return_val = selectedItem.value?.id ?
      [selectedItem.value.id] :
      []
      console.log('targeted getter called Using strat: ', _return_val)
      return _return_val
    }
  },
  set: (val) => {throw new Error('selected_item_idx setter called.')}
})
function onSelectedItemUpdate(val){
  console.log('on selected called!!!: ', val)
  if (selectedItem === undefined){
    console.log('onSelectedItemUpdate called: private route', val)
    selected_item_idx.value = val
  } else {
    console.log('onSelectedItemUpdate called: v-model route')
    val.length > 0 ? 
    selectedItem.value = props.indexed_data[val] :
    undefined
  }
}


// DIALOG SETUP
/////////////////////////////////////////////////////////////////////////////////
const dialog_operation = ref<CRUD_OPERATION>(CRUD_OPERATION.CREATE);
const dialog_message = ref<string>("");
const dialog_title = computed(() : string => {
  let _return_value: string;
  switch (dialog_operation.value) {
    case CRUD_OPERATION.CREATE:
      _return_value = `New ${props.title}`;
      break;
    case CRUD_OPERATION.UPDATE:
      _return_value = `Edit ${props.title}`;
      break;
    default:
      throw new Error("Unrecognized CRUD operation");
  }
  return _return_value;
});
const dialog_confirm_text = computed(() : string => {
  let _return_value: string;
  switch (dialog_operation.value) {
    case CRUD_OPERATION.CREATE:
      _return_value = "Create";
      break;
    case CRUD_OPERATION.UPDATE:
      _return_value = "Save Changes";
      break;
    default:
      throw new Error("Unrecognized CRUD operation");
  }
  return _return_value;
});

function createDefaultItem() : void {}
function onEditClick() : void {
  dialog_operation.value = CRUD_OPERATION.UPDATE;
  dialog_show.value = true;
  emit('edit')
}
function onNewClick() : void {
  dialog_operation.value = CRUD_OPERATION.CREATE;
  dialog_show.value = true;
  emit('new')
}
function onCloseDialogClick() : void {
  dialog_show.value = false;
  emit("closeDialog");
}
function onConfirmClick() : void { 
  // const cpy = { ...selectedItem.value };
  switch (dialog_operation.value){
    case CRUD_OPERATION.CREATE:
      emit("create");
      break;
    case CRUD_OPERATION.UPDATE:
      emit('update')
      break;
  }

  // do user function

  
}
</script>
