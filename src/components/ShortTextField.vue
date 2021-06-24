<template>
  <fieldset class="mb-4">
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">
        {{ title }}
      </label>
      <input
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        @keyup="validation($event)"
        :id="name"
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
        :type="type"
        :placeholder="placeholder"
      />
      <p v-if="!isValid && isValid != null" class="text-red-500 text-xs italic">
        {{ placeholder }}
      </p>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: ["title", "placeholder", "name", "value", "type", "isValid"],
  emits: ["update:value", "update:isValid"],
  data() {
    return {
      emailRegX:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      phoneRegX: /((0)(\d{8,9}$))/,
    };
  },
  methods: {
    validation: function () {
      // Validate email
      let defaultIsValid = false;
      switch (this.type) {
        case "email":
          defaultIsValid = this.emailRegX.test(this.value);
          break;
        case "tel":
          defaultIsValid = this.phoneRegX.test(this.value);
          break;
        case "text":
          defaultIsValid = this.value.length > 0;
      }

      this.$emit("update:isValid", defaultIsValid);
    },
  },
};
</script>