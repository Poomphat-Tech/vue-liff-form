<template>
  <fieldset class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ title }}
    </label>
    <div class="mt-4 space-y-4">
      <div v-for="(choice, index) in choices" class="flex items-start">
        <div class="flex items-center h-5">
          <input
            :value="choice"
            :id="name + index"
            @change="onChange"
            v-model="checkedValue"
            type="checkbox"
            :class="{ 'border-red-300': !isValid && isValid != null }"
            class="
              focus:ring-indigo-500
              h-4
              w-4
              text-indigo-600
              border-gray-300
              rounded
            "
          />
        </div>
        <div class="ml-3 text-sm">
          <label :for="name + index" class="font-medium text-gray-700">{{
            choice
          }}</label>
        </div>
      </div>
      <p v-if="!isValid && isValid != null" class="text-red-500 text-xs italic">
        {{ placeholder }}
      </p>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: {
    title: String,
    choices: Array,
    name: String,
    value: Array,
    placeholder: String,
    isValid: Boolean,
  },
  data() {
    return {
      checkedValue: [],
    };
  },
  emits: ["update:value", "update:isValid"],
  methods: {
    onChange: function (event) {
      this.$emit("update:isValid", this.checkedValue.length > 0);
      this.$emit("update:value", this.checkedValue);
    },
  },
};
</script>
