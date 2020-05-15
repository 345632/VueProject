<template>
    <div>
        <div class="widget-padding-md border border-primary">
            <h3>Guidelines for code upload</h3>
            <ul>
                <strong>
                    <li><a href="../icon/google-plus"><i
                            class="fa fa-circle-thin"
                    /></a>    Submit your C source code in a tar or zip archive.
                    </li>
                    <li><a href="../icon/google-plus"><i
                            class="fa fa-circle-thin"
                    /></a> Indicate the function under test and the main file under test with its relative path in the
                        archive.
                    </li>
                    <li><a href="../icon/google-plus"><i
                            class="fa fa-circle-thin"
                    /></a> The main file may include other files using their relative paths.
                    </li>
                    <li><a href="../icon/google-plus"><i
                            class="fa fa-circle-thin"
                    /></a> Absolute paths should not be used.
                    </li>
                </strong>
            </ul>
        </div>

        <div class="widget-padding-md border border-primary">
           <div>
                   <div class="form-group">
                       <label for="exampleFormControlFile1">Upload archive :
                           <a><i class="fa fa-cloud-upload" /></a></label>
                       <input type="file" class="form-control-file" id="exampleFormControlFile1">
                   </div>
           </div>
            <div>Test function : <input type="text" v-model="testfunc"></div>
            <div>File under test : <input type="text" v-model="path"> </div>
<div>
            <button class="btn btn-primary">Test with default parameters</button>&nbsp
            <button  class="btn btn-primary">Customize test parameters</button>
</div>
        </div>

    </div>

</template>

<script>
    export default {
        name: "Test",
        data() {
            return {
                testfunc:'myfunction',
                path:'mydir/mysubdir/file.c'
            }
        },
    }

</script>

<style src="./Test.scss" lang="scss" scoped/>