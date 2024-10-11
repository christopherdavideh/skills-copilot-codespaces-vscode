function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        contorller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}