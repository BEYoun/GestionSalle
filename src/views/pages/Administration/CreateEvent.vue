<template>
  <vs-row vs-align="center" vs-type="flex" vs-justify="left" vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" heigth="500px">
      <vx-card>
        <form-wizard
          color="rgba(var(--vs-primary), 1)"
          :title="null"
          :subtitle="null"
          finishButtonText="Valider"
          @on-complete="formSubmitted"
        >
          <tab-content title="Step 1" class="mb-5">
            <div class="vx-row">
              <div class="vx-col md:w-full w-full mt-5">
                <vs-input class="w-full" placeholder="Nom evenement" v-model="nomEve" />
              </div>
            </div>
            <!-- tab 1 content -->
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                <flat-pickr
                  :config="configFromdateTimePicker"
                  v-model="fromDate"
                  placeholder="From Date"
                  @on-change="onFromChange"
                  class="w-full"
                />
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <flat-pickr
                  :config="configTodateTimePicker"
                  v-model="toDate"
                  placeholder="To Date"
                  @on-change="onToChange"
                  class="w-full"
                  label="Email"
                />
              </div>
            </div>
          </tab-content>

          <!-- tab 2 content -->
          <tab-content title="Step 2" class="mb-5">
            <vs-row vs-align="center" vs-type="flex" vs-justify="left" vs-w="12">
              <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12" heigth="500px">
                <vx-card>
                  <h1>Carte ENSA</h1>
                  <div class="grid-layout-container alignment-block">
                    <div class="map" id="map" @mouseover="activeArea()">
                      <div class="map__list">
                        <vs-list>
                          <vs-list-header title="Group 1"></vs-list-header>
                          <ul>
                            <li>
                              <a
                                href="#"
                                id="list-ELECTRIQUE"
                                @mouseenter="activeArea('ELECTRIQUE')"
                              >
                                <vs-list-item
                                  title="Departement Electrique"
                                  subtitle="X salle libre"
                                >
                                  <vs-checkbox
                                    color="danger"
                                    v-model="selectDepElectrique"
                                    @click="selectAll('Electrique')"
                                  />
                                </vs-list-item>
                              </a>
                            </li>
                            <li>
                              <a href="#" id="list-RESEAU" @mouseenter="activeArea('RESEAU')">
                                <vs-list-item title="Departement Reseau" subtitle="X salle libre">
                                  <vs-checkbox
                                    color="danger"
                                    v-model="selectDepReseaux"
                                    @click="selectAll('Reseau')"
                                  />
                                </vs-list-item>
                              </a>
                            </li>
                            <li>
                              <a href="#" @mouseenter="activeArea('INFO')" id="list-INFO">
                                <vs-list-item
                                  title="Departement Informatique"
                                  subtitle="X salle libre"
                                >
                                  <vs-checkbox
                                    color="danger"
                                    v-model="selectDepInformatique"
                                    @click="selectAll('Informatique')"
                                  />
                                </vs-list-item>
                              </a>
                            </li>
                            <li>
                              <a href="#" @mouseenter="activeArea('GP')" id="list-GP">
                                <vs-list-item
                                  title="Departement Genie de procede et de l'environement"
                                  subtitle="X salle libre"
                                >
                                  <vs-checkbox
                                    color="danger"
                                    v-model="selectDepGP"
                                    @click="selectAll('Genie procéde et de l\'environement')"
                                  />
                                </vs-list-item>
                              </a>
                            </li>
                            <li>
                              <a href="#" @mouseenter="activeArea('1')" id="list-1">
                                <vs-list-item title="Amphi numero 1" subtitle="X salle libre">
                                  <vs-checkbox
                                    color="danger"
                                    v-model="selectAmphie1"
                                    @click="addAmphie('API','amphi 1',selectAmphie1)"
                                  />
                                </vs-list-item>
                              </a>
                            </li>
                            <li>
                              <a href="#" @mouseenter="activeArea('2')" id="list-2">
                                <vs-list-item title="Amphie numero 2" subtitle="X salle libre">
                                  <vs-checkbox
                                    color="danger"
                                    v-model="selectAmphie2"
                                    @click="addAmphie('API','amphi 2',selectAmphie2)"
                                  />
                                </vs-list-item>
                              </a>
                            </li>
                            <li>
                              <a href="#" @mouseenter="activeArea('Theatre')" id="list-Theatre">
                                <vs-list-item title="Amphie Theatre" subtitle="X salle libre">
                                  <vs-checkbox
                                    color="danger"
                                    v-model="selectAmphieTheatre"
                                    @click="addAmphie('API','amphi Theatre',selectAmphieTheatre)"
                                  />
                                </vs-list-item>
                              </a>
                            </li>
                          </ul>
                        </vs-list>
                      </div>

                      <div class="map__image">
                        <vx-tooltip text="Selectionner le departement" color="success">
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
                              <a
                                id="departement-ELECTRIQUE"
                                @mouseenter="activeArea('ELECTRIQUE')"
                                @click="GE=true"
                              >
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
                              <a
                                id="departement-RESEAU"
                                @mouseenter="activeArea('RESEAU')"
                                @click="GRT=true"
                              >
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
                              <a
                                id="departement-INFO"
                                @mouseenter="activeArea('INFO')"
                                @click="GI=true"
                              >
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
                              <a
                                id="departement-GP"
                                @mouseenter="activeArea('GP')"
                                @click="GP=true"
                              >
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
                              <a
                                id="departement-2"
                                @click="selectAmphie2 ? selectAmphie2=false: selectAmphie2=true"
                                @mouseenter="activeArea('2')"
                              >
                                <g serif:id="Amphi 2">
                                  <circle
                                    id="Amphi-21"
                                    serif:id="Amphi 2"
                                    cx="542.312"
                                    cy="208"
                                    r="75"
                                  />
                                  <!-- <text x="490.305px" y="235.836px"
                                  style="font-family:'ArialMT', 'Arial', sans-serif;font-size:89.996px;">A2</text>-->
                                </g>
                              </a>
                              <a
                                id="departement-1"
                                @click="selectAmphie1 ? selectAmphie1=false: selectAmphie1=true"
                                @mouseenter="activeArea('1')"
                              >
                                <g serif:id="Amphi 1">
                                  <circle
                                    id="Amphi-11"
                                    serif:id="Amphi 1"
                                    cx="772.337"
                                    cy="208"
                                    r="75"
                                  />
                                  <!-- <text x="724.61px" y="234.596px"
                                  style="font-family:'ArialMT', 'Arial', sans-serif;font-size:89.996px;">A1</text>-->
                                </g>
                              </a>
                              <a
                                id="departement-Theatre"
                                @click="selectAmphieTheatre ? selectAmphieTheatre=false: selectAmphieTheatre=true"
                                @mouseenter="activeArea('Theatre')"
                              >
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
                  <!-- les pop up des departement -->
                  <vs-popup
                    background-color="rgba(0,100,125,.4)"
                    class
                    title="Departement Genie de procede et de l'environement"
                    :active.sync="GP"
                  >
                    <h1>Selectionner les salles voulue</h1>
                    <br />
                    <vx-card>
                      <div class="vx-col w-full sm:w-1/2 md:w-full lg:w-1/3 mb-base">
                        <svg
                          viewBox="-20 -20 400 300"
                          xmlns="http://www.w3.org/2000/svg"
                          width="500"
                          height="400"
                        >
                          <!-- Rounded corner rect element -->
                          <g @click="selectSalle('Genie procéde et de l\'environement','E1')">
                            <rect x="0" y="150" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="E1"
                              class="hidden"
                              cx="0"
                              cy="150"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text x="25" y="195" fill="white" alignment-baseline="central">Salle E1</text>
                          </g>
                          <g @click="selectSalle('Genie procéde et de l\'environement','E2')">
                            <rect x="120" y="150" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="E2"
                              class="hidden"
                              cx="120"
                              cy="150"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text
                              x="145"
                              y="195"
                              fill="white"
                              alignment-baseline="central"
                            >Salle E2</text>
                          </g>
                          <g @click="selectSalle('Genie procéde et de l\'environement','E3')">
                            <rect x="240" y="150" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="E3"
                              class="hidden"
                              cx="240"
                              cy="150"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text
                              x="255"
                              y="195"
                              fill="white"
                              alignment-baseline="central"
                            >Salle E3</text>
                          </g>
                        </svg>
                      </div>
                    </vx-card>
                  </vs-popup>
                  <!-- ########### Done -->
                  <vs-popup
                    background-color="rgba(0,100,125,.4)"
                    class
                    title="Departement Genie Informatique"
                    :active.sync="GI"
                  >
                    <h1>Selectionner les salles voulue</h1>
                    <br />
                    <vx-tooltip text="SElectionner les salles du Departement info" color="success">
                      <vx-card>
                        <div class="vx-col w-full sm:w-1/2 md:w-full lg:w-1/3 mb-base">
                          <svg
                            viewBox="-20 -20 400 300"
                            xmlns="http://www.w3.org/2000/svg"
                            width="500"
                            height="400"
                          >
                            <!-- Rounded corner rect element -->
                            <g @click="selectSalle('Informatique','C1')">
                              <rect x="0" y="0" width="100" height="100" rx="15" ry="15" />
                              <circle
                                id="C1"
                                class="hidden"
                                cx="0"
                                cy="0"
                                r="10"
                                style="fill: green;stroke: #fff;"
                              />
                              <text
                                x="25"
                                y="45"
                                fill="white"
                                alignment-baseline="central"
                              >Salle C1</text>
                            </g>
                            <g @click="selectSalle('Informatique','C2')">
                              <rect x="120" y="0" width="100" height="100" rx="15" ry="15" />
                              <circle
                                id="C2"
                                class="hidden"
                                cx="120"
                                cy="0"
                                r="10"
                                style="fill: green;stroke: #fff;"
                              />
                              <text
                                x="145"
                                y="45"
                                fill="white"
                                alignment-baseline="central"
                              >Salle C2</text>
                            </g>
                            <g @click="selectSalle('Informatique','Info 1')">
                              <rect x="240" y="0" width="100" height="100" rx="15" ry="15" />
                              <circle
                                id="Info 1"
                                class="hidden"
                                cx="240"
                                cy="0"
                                r="10"
                                style="fill: green;stroke: #fff;"
                              />
                              <text
                                x="255"
                                y="45"
                                fill="white"
                                alignment-baseline="central"
                              >Salle info1</text>
                            </g>
                            <g @click="selectSalle('Informatique','C3')">
                              <rect x="60" y="150" width="100" height="100" rx="15" ry="15" />
                              <circle
                                id="C3"
                                class="hidden"
                                cx="60"
                                cy="150"
                                r="10"
                                style="fill: green;stroke: #fff;"
                              />
                              <text
                                x="85"
                                y="195"
                                fill="white"
                                alignment-baseline="central"
                              >Salle C3</text>
                            </g>
                            <g @click="selectSalle('Informatique','Info 2')">
                              <rect x="240" y="150" width="100" height="100" rx="15" ry="15" />
                              <circle
                                id="Info 2"
                                class="hidden"
                                cx="240"
                                cy="150"
                                r="10"
                                style="fill: green;stroke: #fff;"
                              />
                              <text
                                x="255"
                                y="195"
                                fill="white"
                                alignment-baseline="central"
                              >Salle info2</text>
                            </g>
                          </svg>
                        </div>
                      </vx-card>
                    </vx-tooltip>
                  </vs-popup>
                  <!-- ########### -->
                  <vs-popup
                    background-color="rgba(0,100,125,.4)"
                    class
                    title="Departement Genie Reseaux"
                    :active.sync="GRT"
                  >
                    <h1>Selectionner les salles voulue</h1>
                    <br />
                    <vx-card>
                      <div class="vx-col w-full sm:w-1/2 md:w-full lg:w-1/2 mb-base">
                        <svg
                          viewBox="-20 -20 400 300"
                          xmlns="http://www.w3.org/2000/svg"
                          width="500"
                          height="400"
                        >
                          <!-- Rounded corner rect element -->
                          <g @click="selectSalle('Reseaux','B1')">
                            <rect x="0" y="0" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="B1"
                              class="hidden"
                              cx="0"
                              cy="0"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text x="25" y="45" fill="white" alignment-baseline="central">Salle B1</text>
                          </g>
                          <g @click="selectSalle('Reseaux','B2')">
                            <rect x="120" y="0" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="B2"
                              class="hidden"
                              cx="120"
                              cy="0"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text x="145" y="45" fill="white" alignment-baseline="central">Salle B2</text>
                          </g>
                          <g @click="selectSalle('Reseaux','B3')">
                            <rect x="240" y="0" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="B3"
                              class="hidden"
                              cx="240"
                              cy="0"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text x="255" y="45" fill="white" alignment-baseline="central">Salle B3</text>
                          </g>
                          <g @click="selectSalle('Reseaux','Reseau')">
                            <rect x="240" y="150" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="Reseau"
                              class="hidden"
                              cx="240"
                              cy="150"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text
                              x="245"
                              y="195"
                              fill="white"
                              alignment-baseline="central"
                            >Salle Reseaux</text>
                          </g>
                        </svg>
                      </div>
                    </vx-card>
                  </vs-popup>
                  <!-- ########### Done -->
                  <vs-popup
                    background-color="rgba(0,100,125,.4)"
                    class
                    title="Departement Genie Electrique"
                    :active.sync="GE"
                  >
                    <h1>Selectionner les salles voulue</h1>
                    <br />
                    <vx-card>
                      <div class="vx-col w-full sm:w-1/2 md:w-full lg:w-1/3 mb-base">
                        <svg
                          viewBox="-20 -20 400 300"
                          xmlns="http://www.w3.org/2000/svg"
                          width="500"
                          height="400"
                        >
                          <!-- Rounded corner rect element -->
                          <g @click="selectSalle('Electrique','A1')">
                            <rect x="0" y="0" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="A1"
                              class="hidden"
                              cx="0"
                              cy="0"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text x="25" y="45" fill="white" alignment-baseline="central">Salle A1</text>
                          </g>
                          <g @click="selectSalle('Electrique','A2')">
                            <rect x="120" y="0" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="A2"
                              class="hidden"
                              cx="120"
                              cy="0"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text x="145" y="45" fill="white" alignment-baseline="central">Salle A2</text>
                          </g>
                          <g @click="selectSalle('Electrique','A3')">
                            <rect x="240" y="0" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="A3"
                              class="hidden"
                              cx="240"
                              cy="0"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text x="255" y="45" fill="white" alignment-baseline="central">Salle A3</text>
                          </g>
                          <g @click="selectSalle('Electrique','Electrique')">
                            <rect x="60" y="150" width="100" height="100" rx="15" ry="15" />
                            <circle
                              id="Electrique"
                              class="hidden"
                              cx="60"
                              cy="150"
                              r="10"
                              style="fill: green;stroke: #fff;"
                            />
                            <text
                              x="78"
                              y="195"
                              fill="white"
                              alignment-baseline="central"
                            >Salle Elec</text>
                          </g>
                        </svg>
                      </div>
                    </vx-card>
                  </vs-popup>
                  <!-- fin de pop up -->
                </vx-card>
              </vs-col>
            </vs-row>
          </tab-content>

          <!-- tab 3 content -->

          <tab-content title="Step 3" class="mb-5">
            <div id="demo-basic-card">
              <div class="vx-row match-height">{{selected}}</div>
              <vs-table :data="selected">
                <template slot="thead">
                  <vs-th>Nom Departement</vs-th>
                  <vs-th>Nom Salle</vs-th>
                  <vs-th>Check</vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td :data="tr.email">{{ tr.departement }}</vs-td>
                    <vs-td :data="tr.username">{{ tr.salle }}</vs-td>
                    <vs-td :data="tr.username">
                      <div
                        :id="'div-with-loading'+tr.idSalle"
                        class="vs-con-loading__container"
                      >Pas encor verifier</div>
                    </vs-td>

                    <template class="expand-user" slot="expand">
                      <div class="con-expand-users w-full">
                        <div class="con-btns-user flex items-center justify-between">
                          <div class="con-userx flex items-center justify-start">
                            <span>
                              Demande de reservation dans le departement
                              <strong
                                class="text-warning"
                              >{{ tr.departement }}</strong> à la salle
                              <strong class="text-warning">{{ tr.salle }}</strong>
                            </span>
                          </div>
                          <div class="flex">
                            <vs-button
                              type="border"
                              size="small"
                              icon-pack="feather"
                              icon="icon-trash"
                              color="danger"
                            ></vs-button>
                          </div>
                        </div>
                      </div>
                    </template>
                  </vs-tr>
                </template>
              </vs-table>
              <div class="vx-row">
                <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                  <vs-button
                    @click="openLoadingInDiv"
                    type="relief"
                    class="text-center bg-danger"
                  >Verifier la disponibilite</vs-button>
                </vs-col>
              </div>
            </div>
          </tab-content>
        </form-wizard>

        <!-- {{deps[0].Salles}} -->
        <!-- <button @click="getIdSalles('Informatique','C3')">clicke</button> -->
      </vx-card>
    </vs-col>
  </vs-row>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      users: [
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          website: "kale.biz"
        }
      ],
      GP: false,
      GI: false,
      GRT: false,
      GE: false,
      nomEve: "",
      fromDate: null,
      toDate: null,
      selectAmphie1: false,
      selectAmphie2: false,
      selectAmphieTheatre: false,
      selectDepInformatique: false,
      selectDepReseaux: false,
      selectDepElectrique: false,
      selectDepGP: false,
      configFromdateTimePicker: {
        minDate: new Date(),
        maxDate: null,
        enableTime: true
      },
      configTodateTimePicker: {
        minDate: null,
        enableTime: true
      },
      selected: [],
      backgroundLoading: "primary",
      colorLoading: "#fff"
    };
  },
  methods: {
    openLoadingInDiv() {
      this.selected.forEach(el => {
        this.$vs.loading({
          container: "#div-with-loading" + el.idSalle,
          scale: 0.6
        });
        const payload = {
          salleDetails: {
            idSalle: el.idSalle,
            fromDate: this.fromDate,
            toDate: this.toDate
          }
        };
        this.$store
          .dispatch("dep/checkSalle", payload)
          .then(response => {
            // console.log(response);
            if (response.bool) {
              document.querySelector(
                "#div-with-loading" + el.idSalle
              ).innerHTML = "disponible";
            } else {
              document.querySelector(
                "#div-with-loading" + el.idSalle
              ).innerHTML = "No dispo!!";
            }
            this.$vs.loading.close(
              "#div-with-loading" + el.idSalle + " > .con-vs-loading"
            );
          })
          .catch(error => {
            this.$vs.loading.close(
              "#div-with-loading" + el.idSalle + " > .con-vs-loading"
            );
            this.$vs.notify({
              title: "Error",
              text: error.message,
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "danger"
            });
          });
        // setTimeout(() => {}, 3000);
      });
    },
    ...mapGetters({ departements: "dep/departements" }),
    selectAll(departement) {
      var salles = this.deps.filter(el => el.nom === departement)[0].Salles;
      salles.forEach(el => {
        this.selectSalle(departement, el.nom);
      });
      console.log(salles);
    },
    selectSalle(departement, salle) {
      if (document.getElementById(salle).classList.contains("hidden")) {
        this.selected.push({
          departement,
          salle,
          idSalle: this.getIdSalles(departement, salle),
          idDepartement: this.getIdDepartement(departement)
        });
        document.getElementById(salle).classList.remove("hidden");
      } else {
        this.selected.pop({
          departement,
          salle,
          idSalle: this.getIdSalles(departement, salle),
          idDepartement: this.getIdDepartement(departement)
        });
        document.getElementById(salle).classList.add("hidden");
      }
    },
    addAmphie(departement, salle, bool) {
      if (!bool) {
        this.selected.push({
          departement,
          salle,
          idSalle: this.getIdSalles(departement, salle),
          idDepartement: this.getIdDepartement(departement)
        });
      } else {
        this.selected.pop({
          departement,
          salle,
          idSalle: this.getIdSalles(departement, salle),
          idDepartement: this.getIdDepartement(departement)
        });
      }
    },
    formSubmitted() {
      this.$vs.loading();

      const payloadEv = {
        eventDetails: {
          nom: this.nomEve,
          sujet: "lorem ipsu",
          description: "lorem ipsu"
        },
        reservationDetails: {
          salles: this.selected,
          fromDate: this.fromDate,
          toDate: this.toDate
        },
        salleDetails: {
          salles: this.selected
        }
      };

      this.$store
        .dispatch("dep/createEvent", payloadEv)
        .then(response => {
          console.log(response);

          this.$vs.loading.close();
        })
        .catch(error => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.message,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger"
          });
        });
    },
    getIdSalles(departement, salle) {
      return this.deps
        .filter(el => el.nom === departement)[0]
        .Salles.filter(res => res.nom === salle)[0].id;
    },
    getIdDepartement(departement) {
      return this.deps.filter(el => el.nom === departement)[0].id;
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
    },
    onFromChange(selectedDates, dateStr) {
      this.$set(this.configTodateTimePicker, "minDate", dateStr);
    },
    onToChange(selectedDates, dateStr) {
      this.$set(this.configFromdateTimePicker, "maxDate", dateStr);
    }
  },
  computed: {
    ...mapState({
      deps: state => state.dep.departements
    })
  },
  components: {
    FormWizard,
    TabContent,
    flatPickr
  }
  // mounted() {
  //   console.log(this.$store.getters["dep/departements"]);
  // }
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
circle.hidden {
  display: none;
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
