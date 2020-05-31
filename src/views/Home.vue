<template>
  <vs-row vs-align="center" vs-type="flex" vs-justify="left" vs-w="7">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" heigth="500px">
      <vx-card>
        <h1>Carte ENSA</h1>
        <div class="grid-layout-container alignment-block">
          <div class="map" id="map" @mouseover="activeArea()">
            <div class="map__list">
              <ul>
                <li>
                  <a
                    href="#"
                    id="list-ELECTRIQUE"
                    @mouseenter="activeArea('ELECTRIQUE')"
                  >departement ELECTRIQUE</a>
                </li>
                <li>
                  <a href="#" id="list-RESEAU" @mouseenter="activeArea('RESEAU')">departement RESEAU</a>
                </li>
                <li>
                  <a href="#" @mouseenter="activeArea('INFO')" id="list-INFO">departement INFO</a>
                </li>
                <li>
                  <a href="#" @mouseenter="activeArea('GP')" id="list-GP">departement GP</a>
                </li>
                <li>
                  <a href="#" @mouseenter="activeArea('1')" id="list-1">Amphi 1</a>
                </li>
                <li>
                  <a href="#" @mouseenter="activeArea('2')" id="list-2">Amphi 2</a>
                </li>
                <li>
                  <a href="#" @mouseenter="activeArea('Theatre')" id="list-Theatre">Amphi Theatre</a>
                </li>
              </ul>
            </div>

            <div class="map__image">
              <vx-tooltip text="SElectionner le departement" color="success">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                  xmlns:serif="http://www.serif.com/"
                  style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
                >
                  <g>
                    <a id="departement-ELECTRIQUE" @mouseenter="activeArea('ELECTRIQUE')">
                      <g serif:id="departement ELECTRIQUE">
                        <rect
                          id="departement-ELECTRIQUE1"
                          serif:id="departement ELECTRIQUE"
                          x="290"
                          y="723"
                          width="320"
                          height="150"
                        />
                        <!-- <text x="344.019px" y="832.136px"
                        style="font-family:'ArialMT', 'Arial', sans-serif;font-size:88.265px;">ELEC</text>-->
                      </g>
                    </a>
                    <a id="departement-RESEAU" @mouseenter="activeArea('RESEAU')">
                      <g serif:id="departement RESEAU">
                        <rect
                          id="departement-RESEAU1"
                          serif:id="departement RESEAU"
                          x="650"
                          y="723.042"
                          width="320"
                          height="150"
                        />
                        <!-- <text x="661.385px" y="820.979px"
                        style="font-family:'ArialMT', 'Arial', sans-serif;font-size:72px;">RES/TEL</text>-->
                      </g>
                    </a>
                    <a id="departement-INFO" @mouseenter="activeArea('INFO')">
                      <g serif:id="departement INFO">
                        <rect
                          id="departement-INFO1"
                          serif:id="departement INFO"
                          x="650"
                          y="538.044"
                          width="320"
                          height="150"
                        />
                        <!-- <text x="706.015px" y="644.94px"
                        style="font-family:'ArialMT', 'Arial', sans-serif;font-size:88.265px;">INFO</text>-->
                      </g>
                    </a>
                    <a id="departement-GP" @mouseenter="activeArea('GP')">
                      <g serif:id="departement GP">
                        <rect
                          id="departement-GP1"
                          serif:id="departement GP"
                          x="296.91"
                          y="353.047"
                          width="320"
                          height="150"
                        />
                        <!-- <text x="384.93px" y="461.463px"
                        style="font-family:'ArialMT', 'Arial', sans-serif;font-size:88.265px;">GP</text>-->
                      </g>
                    </a>
                    <a id="departement-2" @mouseenter="activeArea('2')">
                      <g serif:id="Amphi 2">
                        <circle id="Amphi-21" serif:id="Amphi 2" cx="542.312" cy="208" r="75" />
                        <!-- <text x="490.305px" y="235.836px"
                        style="font-family:'ArialMT', 'Arial', sans-serif;font-size:89.996px;">A2</text>-->
                      </g>
                    </a>
                    <a id="departement-1" @mouseenter="activeArea('1')">
                      <g serif:id="Amphi 1">
                        <circle id="Amphi-11" serif:id="Amphi 1" cx="772.337" cy="208" r="75" />
                        <!-- <text x="724.61px" y="234.596px"
                        style="font-family:'ArialMT', 'Arial', sans-serif;font-size:89.996px;">A1</text>-->
                      </g>
                    </a>
                    <a id="departement-Theatre" @mouseenter="activeArea('Theatre')">
                      <g serif:id="Amphi Theatre">
                        <circle
                          id="Amphi-Theatre1"
                          serif:id="Amphi Theatre"
                          cx="109.092"
                          cy="798"
                          r="75"
                        />
                        <!-- <text x="57.646px" y="827.178px"
                                style="font-family:'ArialMT', 'Arial', sans-serif;font-size:89.996px;">A
                        <tspan x="110.994px " y="827.178px ">T</tspan></text>-->
                      </g>
                    </a>
                  </g>
                </svg>
              </vx-tooltip>
            </div>
          </div>
        </div>
        <button @click="test">hello</button>
      </vx-card>
    </vs-col>
  </vs-row>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false
    };
  },
  methods: {
    test() {
      console.log(this.$store.getters["dep/departements"]);
    },
    activeArea: function(id) {
      var map = document.querySelector("#map");
      map.querySelectorAll(".is-active").forEach(function(item) {
        item.classList.remove("is-active");
      });
      if (id !== undefined) {
        document.querySelector("#list-" + id).classList.add("is-active");
        document.querySelector("#departement-" + id).classList.add("is-active");
      }
    }
  },
  mounted() {}
};
</script>
<style>
.map__image {
  width: 50%;
  float: left;
}

.map__image rect,
circle {
  fill: #a4ced2;
  stroke: #000;
  stroke-width: 1px;
  transition: fill 0.3s;
}

.map__image .is-active rect,
.is-active circle {
  fill: #3538d2;
}

.map__list {
  float: right;
  widows: 50%;
}

.map__list a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s;
}

.map__list a.is-active {
  color: #3558d2;
  font-weight: bold;
  text-decoration: underline;
}
</style>
