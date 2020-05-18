<template>
    <div class="scroll" v-highlight>
        <pre><code>{{codeContent}}</code></pre>
    </div>
</template>
<script>
    import states from "@/assets/code/code.json";
    import $ from 'jquery';
    export default {
        name: "Code",
        props: ['ind', 'highlight'],
        computed: {
            codeContent() {
                for(let i=0;i< states.codes.length;i++)
                {
                    if(states.codes[i].title==this.ind){
                        return states.codes[i].content
                    }
                }
            }
        },
        mounted() {
            this.$nextTick(()=>{

                $("pre code").each(function () {
                    $(this).html("<li style='list-style: decimal-leading-zero;'>" + $(this).html());
                    $(this).html($(this).html().replace(/\n/g, "\n</li><li style=' list-style: decimal-leading-zero;'>"));
                    $(this).html($(this).html() + "</li>");
                });
                for (let val in this.highlight) {
                    $("code li:eq(" + (Math.abs(this.highlight[val]) - 1) + ")").css('background-color', '#FFFF4F');
                }
                }
            );
        },
    }
</script>
<style src="./Code.scss" lang="scss" scoped/>