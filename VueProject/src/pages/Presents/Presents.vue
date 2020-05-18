<template>
    <div>
        <b-row>
            <b-col md="1">
                <div class="btn-group-vertical btn-group-lg" role="group" aria-label="First group">
                    <button type="button" @click="btn(1)" class="btn btn-primary">1</button>
                    <button type="button" @click="btn(2)" class="btn btn-primary">2</button>
                    <button type="button" @click="btn(3)" class="btn btn-primary">3</button>
                    <button type="button" @click="btn(4)" class="btn btn-primary">4</button>
                    <button type="button" @click="btn(5)" class="btn btn-primary">5</button>
                    <button type="button" @click="btn(6)" class="btn btn-primary">6</button>
                    <button type="button" @click="btn(7)" class="btn btn-primary">7</button>
                    <button type="button" @click="btn(8)" class="btn btn-primary">8</button>
                    <button type="button" @click="btn(9)" class="btn btn-primary">9</button>
                    <button type="button" @click="btn(10)" class="btn btn-primary">10</button>
                </div>
            </b-col>
            <b-col>
                <div>
                    <b-card no-body>
                        <b-tabs card>
                            <b-tab title="Path" active>
                                <b-card-text><strong>tritype.c :</strong>
                                    <b-row>
                                        <b-col>
                                            <h6 v-for="triType in (mock[ind-1].triType)" :key="triType">
                                                {{triType}},
                                            </h6>
                                        </b-col>
                                        <div style="margin:0px;padding:0px">
                                            <Code @load="forceRerender" :ind="name" :highlight="mock[ind-1].triType"
                                                  :key="componentKey"></Code>
                                        </div>
                                    </b-row>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Input values">
                                <b-card-text>
                                    <h6>
                                        <li v-for="(input,keys) in (mock[ind-1].input)" :key="input">
                                            {{keys}} : {{input}}
                                        </li>
                                    </h6>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Output values">
                                <b-card-text>
                                    <h6>
                                        <li v-for="(output,keys) in (mock[ind-1].output)" :key="output">
                                            {{keys}} : {{output}}
                                        </li>
                                    </h6>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Verdict">
                                <h6> unknown</h6>
                            </b-tab>
                            <b-tab title="Test driver">
                                <h6> unknown</h6>
                            </b-tab>
                            <b-tab title="Path predicate">
                                <b-card-text>
                                    <h6 v-for="pathPredicate in (mock[ind-1].pathPredicate)" :key="pathPredicate">
                                        {{pathPredicate}}
                                    </h6>
                                </b-card-text>
                            </b-tab>
                        </b-tabs>
                    </b-card>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import axios from "axios";
    import Code from "@/components/Code/Code";
    export default {
        name: "Presents",

        components: {Code},
        data() {
            return {
                componentKey: 0,
                mock: [],
                name: '',
                ind:1,
            }
        },

        watch: {
            ind: {
                handler: function () {
                    console.log(this.ind)
                    this.forceRerender()
                }
            }
        },
        methods: {
            btn: function (a) {
                this.ind = a;
            },
            forceRerender() {
                this.componentKey += 1;
            }
        },
        mounted() {

            this.name = this.$route.query.ID
            axios.get("/api/index").then(res => {
                this.mock = res.data.data
            })
            if(location.href.indexOf('#r')==-1){
                location.href=location.href+"#r";
                location.reload();
            }
        }
    }

</script>

<style scoped>

</style>