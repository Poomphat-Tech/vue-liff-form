<template>
  <fieldset class="mb-4">
    <div>
      <legend class="text-base font-medium text-gray-900">
        {{ title }}
      </legend>
    </div>
    <div class="mt-4 space-y-4">
      <div v-for="(choice, index) in radioBox" class="flex items-center">
        <input
          :id="choice + index"
          :name="name"
          @click="onClick($event)"
          type="radio"
          class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          :class="{ 'border-red-300': !isValid && isValid != null }"
          :value="choice"
        />
        <label
          :for="choice + index"
          class="ml-3 block text-sm font-medium text-gray-700"
        >
          {{ choice }}
        </label>
      </div>
      <p v-if="!isValid && isValid != null" class="text-red-500 text-xs italic">
        {{ placeholder }}
      </p>
    </div>
  </fieldset>
</template>
<script>
export default {
  props: ["title", "name", "radioBox", "value", "placeholder", "isValid"],
  emits: ["update:value", "update:isValid"],
  methods: {
    onClick: function (event) {
      this.$emit("update:isValid", true);
      this.$emit("update:value", event.target.value);
      console.log("test event" + event.target.value);
      console.log("test on click");
    },
  },
};
</script>