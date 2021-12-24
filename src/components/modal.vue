<template>
    <div class="modal" :style="{
        display: isHidden ? 'none' : 'block'
    }">

        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" @click="isHidden = !isHidden">&times;</span>
                <slot name="title"></slot>
            </div>
            <div class="modal-body">
                <slot name="content"></slot>
            </div>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "app-modal",
        props: {
            isHidden: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            close() {
                this.isHidden = !this.isHidden
            }
        }
    }
</script>

<style scoped>
    /* The Modal (background) */
    /* Modal Header */
    .modal-header {
        background-color: #1f1f1f;
        color: white;
    }

    /* Modal Body */
    .modal-body {padding: 2px 16px;}

    /* Modal Footer */
    .modal-footer {
        padding: 1.5em 2em;
        background-color: #1f1f1f;
        color: white;
    }

    /* Modal Content */
    .modal-content {
        position: relative;
        background-color: #000;
        margin: auto;
        padding: 0;
        width: 80%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        animation-name: animatetop;
        animation-duration: 0.4s
    }

    /* Add Animation */
    @keyframes animatetop {
        from {top: -300px; opacity: 0}
        to {top: 0; opacity: 1}
    }
    .modal {
        /*display: none; !* Hidden by default *!*/
        position: fixed; /* Stay in place */
        z-index: 100; /* Sit on top */
        left: 0;
        top: 0;
        width: 100vw; /* Full width */
        height: 100vh; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.8); /* Black w/ opacity */
    }

    /* Modal Content/Box */
    .modal-content {
        background-color: #1f1f1f;
        margin: 2% auto; /* 15% from the top and centered */
        padding: 1.5em;
        width: 80%; /* Could be more or less, depending on screen size */
    }

    /* The Close Button */
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
</style>