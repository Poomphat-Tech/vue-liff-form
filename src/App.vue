<template>
  <div
    id="box-wrapper"
    class="bg-gray-50 shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4"
  >
    <div id="header-section" class="my-8">
      <h1 class="text-center text-lg font-semibold">
        ข้อมูลผู้ลงทะเบียนเข้าร่วมแคมเปญ “{{ title }}
      </h1>
      <p class="text-center text-sm">
        ขอสงวนสิทธิ์ให้ผู้ที่ทำถูกต้องกติกาและเงื่อนไขในการเข้าร่วมแคมเปญ
        อ่านรายละเอียดเพิ่มเติม คลิก
      </p>
    </div>
    <form action="#" method="POST">
      <h2 class="text-left text-md font-semibold mb-8 mt-8">
        ข้อมูลของร้านค้า
      </h2>
      <short-text-field
        title="ชื่อร้านค้า (Shop name) *"
        placeholder="โปรดระบุชื่อร้านค้าของคุณ"
        name="shop_name"
        v-model:value="shop_name_value"
      />
      <h3>this is {{ shop_name_value }}</h3>
      <fieldset class="mb-4">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="searchid"
          >
            LINE Official Account ID (ขึ้นต้นด้วยเครื่องหมาย @) *
          </label>
          <input
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
            id="searchid"
            type="text"
            placeholder="โปรดระบุ LINE ID ของร้าน @xxx"
          />
        </div>
      </fieldset>
      <fieldset class="mb-4">
        <div>
          <legend class="text-base font-medium text-gray-900">
            สมัครรับชำระด้วย Rabbit LINE Pay แล้วหรือไม่
          </legend>
          <p class="text-sm text-gray-500">Rabbit LINE Pay user.</p>
        </div>
        <div class="mt-4 space-y-4">
          <div class="flex items-center">
            <input
              id="push_everything"
              name="rlp_user"
              type="radio"
              class="
                focus:ring-indigo-500
                h-4
                w-4
                text-indigo-600
                border-gray-300
              "
            />
            <label
              for="push_everything"
              class="ml-3 block text-sm font-medium text-gray-700"
            >
              ใช่
            </label>
          </div>
          <div class="flex items-center">
            <input
              id="push_email"
              name="rlp_user"
              type="radio"
              class="
                focus:ring-indigo-500
                h-4
                w-4
                text-indigo-600
                border-gray-300
              "
            />
            <label
              for="push_email"
              class="ml-3 block text-sm font-medium text-gray-700"
            >
              ไม่ใช่
            </label>
          </div>
        </div>
      </fieldset>

      <h2 class="text-left text-md font-semibold mb-8 mt-8">
        ข้อมูลส่วนบุคคล(สำหรับใช้มนการติดต่อกลับ)
      </h2>
      <fieldset class="mb-4" id="full_name">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="full_name"
          >
            ชื่อ-นามสกุล *
          </label>
          <input
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
            id="full_name"
            type="text"
            placeholder="โปรดระบุชื่อและนามสกุล"
          />
          <p class="hidden text-red-500 text-xs italic">
            โปรดกรอกชื่อและนามสกุล
          </p>
        </div>
      </fieldset>

      <fieldset class="mb-4" id="phone_number_field">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="phone_number"
          >
            เบอร์โทรศัพท์ *
          </label>
          <input
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
            id="phone_number"
            type="tel"
            placeholder="โปรดระบุเบอร์โทรศัพท์"
          />
          <p class="hidden text-red-500 text-xs italic">
            โปรดกรอกชื่อและนามสกุล
          </p>
        </div>
      </fieldset>

      <fieldset class="mb-4" id="email_field">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="email_field"
          >
            อีเมล *
          </label>
          <input
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
            id="email"
            type="email"
            placeholder="โปรดระบุอีเมล"
          />
          <p class="hidden text-red-500 text-xs italic">
            โปรดกรอกชื่อและนามสกุล
          </p>
        </div>
      </fieldset>

      <fieldset class="mb-4" id="line_id_field">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="full_name"
          >
            LINE ID ส่วนตัว *
          </label>
          <input
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
            id="line_id"
            type="text"
            placeholder="โปรดระบุ LINE ID ส่วนตัว"
          />
          <p class="hidden text-red-500 text-xs italic">
            โปรดกรอกชื่อและนามสกุล
          </p>
        </div>
      </fieldset>

      <fieldset class="mb-4" id="address_field">
        <div>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="address_field"
          >
            ที่อยู่สำหรับจัดส่งของรางวัล
          </label>
          <textarea
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
            placeholder="โปรดระบุที่อยู่ที่สามารถติดต่อได้"
          />
          <p class="hidden text-red-500 text-xs italic">
            โปรดกรอกชื่อและนามสกุล
          </p>
        </div>
      </fieldset>
      <div class="mt-2">
        <div>
          <label class="inline-flex items-center">
            <input
              type="checkbox"
              class="
                rounded
                border-gray-300
                text-indigo-600
                shadow-sm
                focus:border-indigo-300
                focus:ring
                focus:ring-offset-0
                focus:ring-indigo-200
                focus:ring-opacity-50
              "
              checked
            />
            <span class="ml-2"
              >คุณยอมรับกติการและเงื่อนไขในการเข้าร่วมกิจกรรม</span
            >
          </label>
        </div>
      </div>
      <div class="px-4 py-3 text-right sm:px-6">
        <button
          type="submit"
          class="
            inline-flex
            justify-center
            py-2
            px-4
            border border-transparent
            shadow-sm
            text-sm
            font-medium
            rounded-md
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          บันทึก
        </button>
      </div>
    </form>
  </div>
  <form-header></form-header>
</template>

<script>
import FormHeader from "./components/FormHeader.vue";
import ShortTextField from "./components/ShortTextField.vue";

export default {
  components: {
    FormHeader,
    ShortTextField,
  },
  data() {
    return {
      title: "This is test title",
      shop_name_value: "test shop name",
    };
  },
};
</script>

<style>
#app {
}
</style>
