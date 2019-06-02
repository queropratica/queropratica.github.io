(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('StudentController', StudentController);

    /** @ngInject */
    function StudentController(userFactory) {
        var vm = this;

        vm.mentors = [
            {name: 'Alohomora', jobDescription: 'Alohomora do Agreste', company: 'Acme'},
            {name: 'Alohomora', jobDescription: 'Alohomora do Campo', company: 'Acme'},
            {name: 'Alohomora', jobDescription: 'Alohomora do Alom', company: 'Acme'},
            {name: 'Alohomora', jobDescription: 'Alohomora do Adalon', company: 'Acme'}
        ]

        vm.projects = [
            {title: 'Alohomora', summary: 'Alohomora do Agreste', owner: 'Owner PO', publishedAt: '25/05/2019'},
            {title: 'Alohomora', summary: 'Alohomora do Campo', owner: 'Owner Project', publishedAt: '26/05/2019'},
            {title: 'Alohomora', summary: 'Alohomora do Alom', owner: 'Owner Tes', publishedAt: '21/05/2019'},
            {title: 'Alohomora', summary: 'Alohomora do Adalon', owner: 'Owner Fas', publishedAt: '29/05/2019'}
        ]

        userFactory.getMentors()
            .$promise.then(function (mentors) {
                //vm.mentors = mentors
            })
    }
})();