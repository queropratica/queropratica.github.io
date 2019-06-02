(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MentorController', MentorController);

    /** @ngInject */
    function MentorController(projectFactory, $scope, $state) {
        var vm = this;

        vm.redirectToCreateProject = redirectToCreateProject

        function redirectToCreateProject () {
            $state.go('projectCreation')
        }

        $scope.disqusConfig = {
            disqus_shortname: 'https-queropratica-github-io',
            disqus_identifier: 'mentor_screen_',
            disqus_url: 'https://queropratica.github.io'
        };

        vm.projects = [
            {title: 'Alohomora', summary: 'Alohomora do Agreste', owner: 'Owner PO', publishedAt: '25/05/2019'},
            {title: 'Alohomora', summary: 'Alohomora do Campo', owner: 'Owner Project', publishedAt: '26/05/2019'},
            {title: 'Alohomora', summary: 'Alohomora do Alom', owner: 'Owner Tes', publishedAt: '21/05/2019'},
            {title: 'Alohomora', summary: 'Alohomora do Adalon', owner: 'Owner Fas', publishedAt: '29/05/2019'}
        ]

        vm.mentors = [
            {name: 'Alohomora', jobDescription: 'Alohomora do Agreste', company: 'Acme'},
            {name: 'Alohomora', jobDescription: 'Alohomora do Campo', company: 'Acme'},
            {name: 'Alohomora', jobDescription: 'Alohomora do Alom', company: 'Acme'},
            {name: 'Alohomora', jobDescription: 'Alohomora do Adalon', company: 'Acme'}
        ]

        projectFactory.load()
            .$promise.then(function (projects) {
                vm.subjects = projects
            })
    }
})();