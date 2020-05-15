<template>

    <div>

        <div v-for="code in codes" :key="code">
            <div v-if="code.title==ind" class="scroll" v-highlight>
                <div>
                    <pre><code>{{code.content}}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import states from "@/assets/code/code.json";
    import $ from 'jquery';

    export default {
        name: "Code",
        props: ['ind','highlight'],
        computed: {
            codes() {
                return states.codes.map((item) => {
                    return item;
                })
            },
        },
        mounted() {
            $("pre code").each(function () {
                $(this).html("<li style='list-style: decimal-leading-zero;'>" + $(this).html());
                $(this).html($(this).html().replace(/\n/g, "\n</li><li style=' list-style: decimal-leading-zero;'>"));
                $(this).html($(this).html() + "</li>");
            });
            for(let val in this.highlight){
                $("code li:eq("+(Math.abs(this.highlight[val])-1)+")").css('background-color', '#FFFF4F');
            };
        },
    }
</script>
<style src="./Code.scss" lang="scss" scoped/>