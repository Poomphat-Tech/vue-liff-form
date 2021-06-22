<template>
  <fieldset class="mb-4">
    <div>
      <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">
        {{ title }}
      </label>
      <input
        :value="value"
        @input="$emit('update:value', $event.target.value)"
        @keyup.stop="validation($event)"
        :id="name"
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
        type="text"
        :placeholder="placeholder"
      />
      <p class="hidden text-red-500 text-xs italic">
        {{ placeholder }}
      </p>
    </div>
  </fieldset>
</template>

<script>
export default {
  props: ["title", "placeholder", "name", "value"],
  data() {
    return {};
  },
  methods: {
    validation: function (event) {
      console.log(event.target.type);
      console.log(this.value);
    },
  },
};
</script>