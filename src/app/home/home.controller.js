(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController(projectFactory, $scope, $state) {
        var vm = this;

        vm.goToStudent = goToStudent
        vm.goToMentor = goToMentor

        function  goToStudent () {
            $state.go('student')
        }

        function  goToMentor () {
            $state.go('mentor')
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

        projectFactory.load()
            .$promise.then(function (projects) {
                vm.subjects = projects
            })
    }
})();