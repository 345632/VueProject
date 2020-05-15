<template>
    <div>
        <div class="row">
            <b-col>
                <div class="widget-padding-md border border-primary">
                    <h6>
                        Choose any of the programs from the example menu to see an example of test generation. We
                        provide
                        predefined test parameters for each example. You can also elect to customize the test parameters
                        first.</h6>
                </div>
                <div><strong> Select an example :</strong></div>
                <div>
                    <select v-model="ind" class="form-control">
                        <option>Example1</option>
                        <option>Example2</option>
                        <option>Example3</option>
                        <option>Example4</option>
                        <option>Example5</option>
                    </select>
                </div>
                <div>
                    <b-button v-b-toggle="'collapse-2'" variant="primary">Customize test parameters</b-button>&nbsp;
                    <button type="button" class="btn btn-primary" @click="submit">Run test</button>
                </div>
            </b-col>
            <b-col>
                <Code :ind="ind" :highlight=NULL :key="componentKey"></Code>
            </b-col>
        </div>
        <b-collapse id="collapse-2">
            <b-card
                    header="Variable domains"
                    header-tag="header"
            >
                <b-card-text>
                    <div v-for="i in 3" >
                        <input type="text"  name="userName" placeholder="請輸入姓名"/>
                    </div>
                </b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
            <b-card
                    header="Unquantified preconditions"
                    header-tag="header"
            >
                <b-card-text>Header and footers using props.</b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
            <b-card
                    header="Quantified preconditions"
                    header-tag="header"
            >
                <b-card-text>Header and footers using props.</b-card-text>
                <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>

        </b-collapse>
    </div>
</template>
<script>
    import Code from "@/components/Code/Code";

    export default {
        name: "Example",
        components: {Code},
        data() {
            return {
                ind: 'Example1',
                componentKey: 0
            }
        },
        watch: {
            ind: {
                handler: function () {
                    this.forceRerender()
                }
            }
        },
        methods: {
            submit: function () {
                this.$router.push({path: '/app/Presents', query: {ID: this.ind}})
                //     })
            },
            customize: function () {

            },
            forceRerender() {
                this.componentKey += 1;
            }
        },

    }
</script>

<style src="./Example.scss" lang="scss" scoped/>