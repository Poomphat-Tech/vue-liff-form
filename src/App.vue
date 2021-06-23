<template>
  <div
    id="box-wrapper"
    class="bg-gray-50 shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-4"
  >
    <div id="header-section" class="my-8">
      <h1 class="text-center text-lg font-semibold">
        ข้อมูลผู้ลงทะเบียนเข้าร่วมแคมเปญ {{ campaignTitle }}
      </h1>
      <p class="text-center text-sm">
        ขอสงวนสิทธิ์ให้ผู้ที่ทำถูกต้องกติกาและเงื่อนไขในการเข้าร่วมแคมเปญ
        อ่านรายละเอียดเพิ่มเติม
        <span
          ><a href="https://linemyshop.com/terms" target="blank">คลิก</a></span
        >
      </p>
    </div>
    <form action="#" method="POST" @submit.prevent="onSubmit">
      <h2 class="text-left text-md font-semibold mb-8 mt-8">
        ข้อมูลของร้านค้า
      </h2>
      <short-text-field
        title="ชื่อร้านค้า (Shop name) *"
        placeholder="โปรดระบุชื่อร้านค้าของคุณ"
        name="shop_name"
        v-model:value="shopName.value"
        v-model:isValid="shopName.isValid"
        type="text"
      />
      <short-text-field
        title="LINE Official Account ID (ขึ้นต้นด้วยเครื่องหมาย @) *"
        placeholder="โปรดระบุ LINE ID ของร้าน @xxx"
        name="line_shop_id"
        v-model:value="lineShopID.value"
        v-model:isValid="lineShopID.isValid"
        type="text"
      />
      <radio-field
        title="สมัครรับชำระด้วย Rabbit LINE Pay แล้วหรือไม่"
        name="rlp"
        :radio-box="RLPUser.choices"
        v-model:value="RLPUser.value"
        v-model:isValid="RLPUser.isValid"
        placeholder="โปรดเลือกว่าคุณได้เปิด Rabbit LINE Pay แล้วหรือไม่"
      ></radio-field>

      <check-box-field
        title="กรุณาระบุหมวดหมู่ธุรกิจหรือบริการของคุณ (เลือกข้อเดียวที่เหมาะสมมากที่สุด)"
        name="business_category"
        :choices="businessCategory.choices"
        v-model:value="businessCategory.value"
        v-model:isValid="businessCategory.isValid"
        placeholder="โปรดเลือกอย่างน้อย 1 ข้อ"
      ></check-box-field>

      <check-box-field
        title="ธุรกิจอาหารและเครื่องดื่ม"
        name="food"
        :choices="foodSector.choices"
        v-model:value="foodSector.value"
        v-model:isValid="foodSector.isValid"
        placeholder="โปรดเลือกอย่างน้อย 1 ข้อ"
      >
      </check-box-field>
      <check-box-field
        title="ธุรกิจแฟชั่น"
        name="fashion"
        :choices="fashionSector.choices"
        v-model:value="fashionSector.value"
        v-model:isValid="fashionSector.isValid"
        placeholder="โปรดเลือกอย่างน้อย 1 ข้อ"
      >
      </check-box-field>
      <check-box-field
        title="ธุรกิจสุขภาพและความงาม"
        name="beauty"
        :choices="beautySector.choices"
        v-model:value="beautySector.value"
        v-model:isValid="beautySector.isValid"
        placeholder="โปรดเลือกอย่างน้อย 1 ข้อ"
      >
      </check-box-field>
      <check-box-field
        title="ธุรกิจแกดเจ็ต และอุปกรณ์อิเล็กทรอนิกส์"
        name="gadget"
        :choices="gadgetSector.choices"
        v-model:value="gadgetSector.value"
        v-model:isValid="gadgetSector.isValid"
        placeholder="โปรดเลือกอย่างน้อย 1 ข้อ"
      >
      </check-box-field>
      <check-box-field
        title="ธุรกิจบ้านและสวน"
        name="home"
        :choices="homeSector.choices"
        v-model:value="homeSector.value"
        v-model:isValid="homeSector.isValid"
        placeholder="โปรดเลือกอย่างน้อย 1 ข้อ"
      >
      </check-box-field>
      <check-box-field
        title="ธุรกิจท่องเที่ยวและที่พัก"
        name="travel"
        :choices="travelSector.choices"
        v-model:value="travelSector.value"
        v-model:isValid="travelSector.isValid"
        placeholder="โปรดเลือกอย่างน้อย 1 ข้อ"
      >
      </check-box-field>
      <check-box-field
        title="ธุรกิจแม่และเด็ก"
        name="mom_kid"
        :choices="momKidSector.choices"
        v-model:value="momKidSector.value"
        v-model:isValid="momKidSector.isValid"
        placeholder="โปรดเลือกอย่างน้อย 1 ข้อ"
      >
      </check-box-field>
      <h2 class="text-left text-md font-semibold mb-8 mt-8">
        ข้อมูลส่วนบุคคล(สำหรับใช้มนการติดต่อกลับ)
      </h2>
      <short-text-field
        title="ชื่อ-นามสกุล *"
        placeholder="โปรดระบุชื่อและนามสกุล"
        name="full_name"
        v-model:value="fullName.value"
        v-model:isValid="fullName.isValid"
        type="text"
      />
      <short-text-field
        title="เบอร์โทรศัพท์ *"
        placeholder="โปรดระบุเบอร์โทรศัพท์"
        name="phone_number"
        v-model:value="phoneNumber.value"
        v-model:isValid="phoneNumber.isValid"
        type="number"
      />
      <short-text-field
        title="อีเมล *"
        placeholder="โปรดระบุอีเมล"
        name="email"
        v-model:value="email.value"
        v-model:isValid="email.isValid"
        type="email"
      />
      <short-text-field
        title="LINE ID ส่วนตัว *"
        placeholder="โปรดระบุ LINE ID ส่วนตัว"
        name="line_id"
        v-model:value="lineID.value"
        v-model:isValid="lineID.isValid"
        type="text"
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
            v-model="address.value"
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
              v-model="consent.isValid"
              :class="{
                'border-red-300': !consent.isValid && consent.isValid !== null,
              }"
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
import ShortTextField from "./components/ShortTextField.vue";
import CheckBoxField from "./components/CheckBoxField.vue";
import RadioField from "./components/RadioField.vue";

export default {
  components: {
    ShortTextField,
    CheckBoxField,
    RadioField,
  },
  data() {
    return {
      campaignTitle:
        "ร้านค้า MyShop ลุ้นโปรโมทฟรีบน LINE Ads Platform มูลค่ารวม 200,000 บาท",
      shopName: { value: "", isValid: null },
      lineShopID: { value: "", isValid: null },
      RLPUser: { value: "", isValid: null, choices: ["ใช่", "ไม่ใช่"] },
      fullName: { value: "", isValid: null },
      phoneNumber: { value: "", isValid: null },
      email: { value: "", isValid: null },
      lineID: { value: "", isValid: null },
      address: { value: "" },
      consent: { isValid: null },
      allFieldObj: [],
      businessCategory: {
        value: [],
        isValid: null,
        choices: [
          "ธุรกิจอาหารและเครื่องดื่ม",
          "ธุรกิจแฟชั่น",
          "ธุรกิจสุขภาพและความงาม",
          "ธุรกิจแกดเจ็ต และอุปกรณ์อิเล็กทรอนิกส์",
          "ธุรกิจบ้านและสวน",
          "ธุรกิจท่องเที่ยวและที่พัก",
          "ธุรกิจแม่และเด็ก",
          "อื่นๆ",
        ],
      },
      foodSector: {
        value: [],
        isValid: null,
        choices: [
          "อาหารแห้ง / เครื่องปรุง",
          "อาหารสด / ผักและผลไม้",
          "อาหารพร้อมทาน",
          "ขนม เบเกอรี่ ของหวาน",
          "เครื่องดื่ม",
          "อื่นๆ",
        ],
      },
      fashionSector: {
        value: [],
        isValid: null,
        choices: [
          "เสื้อผ้าผู้หญิง",
          "เสื้อผ้าผู้ชาย",
          "เสื้อผ้า Unisex",
          "เครื่องประดับ",
          "กระเป๋า",
          "รองเท้า",
          "แฟชั่นกีฬา",
          "อื่นๆ",
        ],
      },
      beautySector: {
        value: [],
        isValid: null,
        choices: [
          "เครื่องสำอาง",
          "สกินแคร์",
          "วิตามินและอาหารเสริม",
          "บริการด้านความงามและสุขภาพ",
          "ของใช้ส่วนตัว",
          "อื่นๆ",
        ],
      },
      gadgetSector: {
        value: [],
        isValid: null,
        choices: [
          "เกมส์และของเล่น",
          "มือถือและอุปกรณ์เสริม",
          "กล้องและอุปกรณ์เสริม",
          "แกดเจ็ต",
          "คอมพิวเตอร์และแล็บท็อป",
          "เครื่องใช้ไฟฟ้าภายในบ้าน",
          "อื่นๆ",
        ],
      },
      homeSector: {
        value: [],
        isValid: null,
        choices: [
          "ของตกแต่งบ้าน",
          "เฟอร์นิเจอร์",
          "ครัวและอุปกรณ์ทำอาหาร",
          "อุปกรณ์และผลิตภัณฑ์ทำความสะอาด",
          "เครื่องเขียน",
          "อื่นๆ",
        ],
      },
      travelSector: {
        value: [],
        isValid: null,
        choices: [
          "ที่พัก",
          "ดีลอาหาร",
          "แพ็กเกจท่องเที่ยว",
          "บันเทิงและกิจกรรม",
          "การเดินทาง",
          "อื่นๆ",
        ],
      },
      momKidSector: {
        value: [],
        isValid: null,
        choices: [
          "เสื้อผ้าเด็ก",
          "ผลิตภัณฑ์คุณแม่",
          "ผลิตภัณฑ์ดูแลเด็ก",
          "ของใช้เด็ก",
          "หนังสือ ของเล่นเด็ก",
          "อื่นๆ",
        ],
      },
    };
  },
  created() {
    this.allFieldObj.push(
      this.shopName,
      this.lineShopID,
      this.fullName,
      this.phoneNumber,
      this.email,
      this.lineID,
      this.RLPUser,
      this.consent,
      this.businessCategory
    );
    this.allFieldObj.push(
      this.businessCategory,
      this.foodSector,
      this.fashionSector,
      this.gadgetSector,
      this.travelSector,
      this.homeSector,
      this.momKidSector,
      this.beautySector
    );
  },
  methods: {
    onSubmit: function () {
      console.log("Shop name value" + this.shopName.value);
      console.log("line Shop ID value" + this.lineShopID.value);
      console.log("Full name value" + this.fullName.value);
      console.log("phone number value" + this.phoneNumber.value);
      console.log("email value" + this.email.value);
      console.log("line id value" + this.lineID.value);
      console.log("address  value" + this.address.value);
      console.log("this is RLP value" + this.RLPUser.value);
      console.log("test checkbox value");
      console.log(this.businessCategory.value);
      console.log(this.businessCategoryCheck);
      console.log(this.consent);

      // Assign validation to false if validation is not true
      for (const index in this.allFieldObj) {
        if (this.allFieldObj[index].isValid == null) {
          this.allFieldObj[index].isValid = false;
        }
      }
    },
    onBlur: function (isValid) {
      console.log("Call on blur");
      isValid = false;
    },
    onChange: function (event) {
      console.log("Call on change in parent");
      console.log(event);
    },
  },
};
</script>

<style>
#app {
}
</style>
