<template>
  <fieldset class="mb-4" id="address_field">
    <div>
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="address_field"
      >
        {{ title }}
      </label>
      <textarea
        :class="{ 'border-red-500': !isValid && isValid != null }"
        class="
          shadow
          appearance-none
          border
          rounded
          w-full
          py-2
          px-3
          text-gray-700
          leading-tight
          focus:outline-none
          focus:shadow-outline
          mb-2
        "
        id="address"
        :placeholder="placeholder"
        @input="$emit('update:value', $event.target.value)"
        @keyup="validation()"
      />
      <p v-if="!isValid && isValid != null" class="text-red-500 text-xs italic">
        {{ placeholder }}
      </p>
    </div>
  </fieldset>
</template>
<script>
export default {
  props: ["title", "value", "isValid", "placeholder"],
  emits: ["update:value", "update:isValid"],
  methods: {
    validation: function () {
      let defaultIsValid = false;
      if (this.value.length > 0) {
        defaultIsValid = true;
      }
      this.$emit("update:isValid", defaultIsValid);
    },
  },
};
</script>
