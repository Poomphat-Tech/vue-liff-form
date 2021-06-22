<template>
  <fieldset class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">
      {{ title }}
    </label>
    <div class="mt-4 space-y-4">
      <div v-for="(choice, index) in choices" class="flex items-start">
        <div class="flex items-center h-5">
          <input
            :id="name + index"
            type="checkbox"
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
    </div>
  </fieldset>
</template>

<script>
export default {
  props: ["title", "choices", "name"],
};
</script>
