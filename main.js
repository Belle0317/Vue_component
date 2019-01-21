// Vue.component('alert', );
var alert_component = {
	template: '<button @click="on_click">点击我</button>',
	methods: {
		on_click: function() {
			alert('hello world');
		}
	}
};

new Vue({
	el: '#seg1',
	components: {
		alert: alert_component,
	}
});