<template>
  <div
    id="box-wrapper"
    class="bg-gray-50 shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4"
  >
    <div id="header-section" class="my-8">
      <h1 class="text-center text-lg font-semibold">
        ข้อมูลผู้ลงทะเบียนเข้าร่วมแคมเปญ “{{ campaign_title }}
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
      <short-text-field
        title="LINE Official Account ID (ขึ้นต้นด้วยเครื่องหมาย @) *"
        placeholder="โปรดระบุ LINE ID ของร้าน @xxx"
        name="line_shop_id"
        v-model:value="line_shop_id"
      />
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

      <list-field
        title="กรุณาระบุหมวดหมู่ธุรกิจหรือบริการของคุณ (เลือกข้อเดียวที่เหมาะสมมากที่สุด)"
        name="business_category"
        :choices="business_category"
      ></list-field>
      <list-field
        title="ธุรกิจอาหารและเครื่องดื่ม"
        name="food"
        :choices="food_sector"
      >
      </list-field>
      <list-field title="ธุรกิจแฟชั่น" name="fashion" :choices="fashion_sector">
      </list-field>
      <list-field
        title="ธุรกิจสุขภาพและความงาม"
        name="beauty"
        :choices="beauty_sector"
      >
      </list-field>
      <list-field
        title="ธุรกิจแกดเจ็ต และอุปกรณ์อิเล็กทรอนิกส์"
        name="gadget"
        :choices="gadget_sector"
      >
      </list-field>
      <list-field title="ธุรกิจบ้านและสวน" name="home" :choices="home_sector">
      </list-field>
      <list-field
        title="ธุรกิจท่องเที่ยวและที่พัก"
        name="travel"
        :choices="travel_sector"
      >
      </list-field>
      <list-field
        title="ธุรกิจแม่และเด็ก"
        name="mom_kid"
        :choices="mom_kid_sector"
      >
      </list-field>
      <h2 class="text-left text-md font-semibold mb-8 mt-8">
        ข้อมูลส่วนบุคคล(สำหรับใช้มนการติดต่อกลับ)
      </h2>
      <short-text-field
        title="ชื่อ-นามสกุล *"
        placeholder="โปรดระบุชื่อและนามสกุล"
        name="full_name"
        v-model:value="full_name"
      />
      <short-text-field
        title="เบอร์โทรศัพท์ *"
        placeholder="โปรดระบุเบอร์โทรศัพท์"
        name="phone_number"
        v-model:value="phone_number"
      />
      <short-text-field
        title="อีเมล *"
        placeholder="โปรดระบุอีเมล"
        name="email"
        v-model:value="email"
      />
      <short-text-field
        title="LINE ID ส่วนตัว *"
        placeholder="โปรดระบุ LINE ID ส่วนตัว"
        name="line_id"
        v-model:value="line_id"
      />

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
</template>

<script>
import FormHeader from "./components/FormHeader.vue";
import ShortTextField from "./components/ShortTextField.vue";
import ListField from "./components/ListField.vue";

export default {
  components: {
    FormHeader,
    ShortTextField,
    ListField,
  },
  data() {
    return {
      campaign_title: "This is test title",
      shop_name_value: "",
      line_shop_id: "",
      business_category: [
        "ธุรกิจอาหารและเครื่องดื่ม",
        "ธุรกิจแฟชั่น",
        "ธุรกิจสุขภาพและความงาม",
        "ธุรกิจแกดเจ็ต และอุปกรณ์อิเล็กทรอนิกส์",
        "ธุรกิจบ้านและสวน",
        "ธุรกิจท่องเที่ยวและที่พัก",
        "ธุรกิจแม่และเด็ก",
        "อื่นๆ",
      ],
      food_sector: [
        "อาหารแห้ง / เครื่องปรุง",
        "อาหารสด / ผักและผลไม้",
        "อาหารพร้อมทาน",
        "ขนม เบเกอรี่ ของหวาน",
        "เครื่องดื่ม",
        "อื่นๆ",
      ],
      fashion_sector: [
        "เสื้อผ้าผู้หญิง",
        "เสื้อผ้าผู้ชาย",
        "เสื้อผ้า Unisex",
        "เครื่องประดับ",
        "กระเป๋า",
        "รองเท้า",
        "แฟชั่นกีฬา",
        "อื่นๆ",
      ],
      beauty_sector: [
        "เครื่องสำอาง",
        "สกินแคร์",
        "วิตามินและอาหารเสริม",
        "บริการด้านความงามและสุขภาพ",
        "ของใช้ส่วนตัว",
        "อื่นๆ",
      ],
      gadget_sector: [
        "เกมส์และของเล่น",
        "มือถือและอุปกรณ์เสริม",
        "กล้องและอุปกรณ์เสริม",
        "แกดเจ็ต",
        "คอมพิวเตอร์และแล็บท็อป",
        "เครื่องใช้ไฟฟ้าภายในบ้าน",
        "อื่นๆ",
      ],
      home_sector: [
        "ของตกแต่งบ้าน",
        "เฟอร์นิเจอร์",
        "ครัวและอุปกรณ์ทำอาหาร",
        "อุปกรณ์และผลิตภัณฑ์ทำความสะอาด",
        "เครื่องเขียน",
        "อื่นๆ",
      ],
      travel_sector: [
        "ที่พัก",
        "ดีลอาหาร",
        "แพ็กเกจท่องเที่ยว",
        "บันเทิงและกิจกรรม",
        "การเดินทาง",
        "อื่นๆ",
      ],
      mom_kid_sector: [
        "เสื้อผ้าเด็ก",
        "ผลิตภัณฑ์คุณแม่",
        "ผลิตภัณฑ์ดูแลเด็ก",
        "ของใช้เด็ก",
        "หนังสือ ของเล่นเด็ก",
        "อื่นๆ",
      ],
    };
  },
};
</script>

<style>
#app {
}
</style>
