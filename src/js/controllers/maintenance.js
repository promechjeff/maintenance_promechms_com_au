/* jslint strict:true */

angular.module('promechMaintenanceApp')

.controller('MaintenanceCtrl', ['$scope', '$state',
    function($scope, $state) {

        $scope.projects = [{
            jobID: 136,
            name: 'Aldi Mentone',
            technician: {
                accountID: 1,
                name: 'Test User',
                email: 'test.user@email.com'
            },
            lastEdited: '2017-02-10T10:13:00'
        }];

    }
])

.controller('MaintenanceShowCtrl', ['$scope', '$state',
    function($scope, $state) {

        $scope.self = {
            selectedTemplate: null
        };

        $scope.maintenance = {
            project: {
                jobID: 136,
                name: 'Aldi Mentone',
                builder: {
                    name: 'Melbcon'
                },
                address: {
                    pretty: '25 Nepean Highway, Mentone, VIC'
                },
                consultant: {
                    mechanical: {
                        name: 'JBA Consulting'
                    }
                },
                architect: {
                    name: 'Baldasse Cortese'
                },
                technician: {
                    accountID: 1,
                    name: 'Test User',
                    email: 'test.user@email.com'
                },
                lastEdited: '2017-02-10T10:13:00'
            },
            items: [{
                title: 'HVAC, Exhaust Air Fan',
                description: '',
                exampleUnits: 'GEF-1, KEF-2, All TEF-X on Ground',
                points: [{
                    number: '1',
                    description: 'Start fan and observer operation',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'Yes'
                    }, {
                        id: 2,
                        name: 'No'
                    }, ]
                }, {
                    number: '2',
                    description: 'Check bearings for noise or vibration',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'Yes'
                    }, {
                        id: 2,
                        name: 'No'
                    }, ]
                }, {
                    number: '3',
                    description: 'Check fan blade condition',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'Yes'
                    }, {
                        id: 2,
                        name: 'No'
                    }, ]
                }, {
                    number: '4',
                    description: 'Check air supply and duct for debris',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'Yes'
                    }, {
                        id: 2,
                        name: 'No'
                    }, ]
                }, {
                    number: '6',
                    description: 'Check electrical wiring for any damage',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'Yes'
                    }, {
                        id: 2,
                        name: 'No'
                    }, ]
                }, {
                    number: '7',
                    description: 'Check and grease motor and fan blade',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'Yes'
                    }, {
                        id: 2,
                        name: 'No'
                    }, ]
                }, ],
            }, ]
        };

        $scope.templateItems = [{
            templateID: 1,
            name: 'Air Hanlding Unit/s',
            item: {
                title: 'Air Hanlding Unit/s',
                description: '',
                exampleUnits: 'AHU-1, All AHU\'s on Roof',
                points: [{
                    number: '1',
                    description: 'It looks all sweet from the outside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, {
                    number: '2',
                    description: 'It\'s still shiney on the inside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, ],
            },
        }, {
            templateID: 1,
            name: 'Fan Coil Unit/s',
            item: {
                title: 'Fan Coil Unit/s',
                description: '',
                exampleUnits: 'AHU-1, All AHU\'s on Roof',
                points: [{
                    number: '1',
                    description: 'It looks all sweet from the outside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, {
                    number: '2',
                    description: 'It\'s still shiney on the inside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, ],
            },
        }, {
            templateID: 1,
            name: 'Supply Air Fan/s',
            item: {
                title: 'Supply Air Fan/s',
                description: '',
                exampleUnits: 'AHU-1, All AHU\'s on Roof',
                points: [{
                    number: '1',
                    description: 'It looks all sweet from the outside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, {
                    number: '2',
                    description: 'It\'s still shiney on the inside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, ],
            },
        }, {
            templateID: 1,
            name: 'Exhaust Air Fan/s',
            item: {
                title: 'Exhaust Air Fan/s',
                description: '',
                exampleUnits: 'AHU-1, All AHU\'s on Roof',
                points: [{
                    number: '1',
                    description: 'It looks all sweet from the outside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, {
                    number: '2',
                    description: 'It\'s still shiney on the inside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, ],
            },
        }, {
            templateID: 1,
            name: 'Chiller/s',
            item: {
                title: 'Chiller/s',
                description: '',
                exampleUnits: 'AHU-1, All AHU\'s on Roof',
                points: [{
                    number: '1',
                    description: 'It looks all sweet from the outside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, {
                    number: '2',
                    description: 'It\'s still shiney on the inside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, ],
            },
        }, {
            templateID: 1,
            name: 'VRV Indoor/s',
            item: {
                title: 'VRV Indoor/s',
                description: '',
                exampleUnits: 'AHU-1, All AHU\'s on Roof',
                points: [{
                    number: '1',
                    description: 'It looks all sweet from the outside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, {
                    number: '2',
                    description: 'It\'s still shiney on the inside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, ],
            },
        }, {
            templateID: 1,
            name: 'Evaporative/s',
            item: {
                title: 'Evaporative/s',
                description: '',
                exampleUnits: 'AHU-1, All AHU\'s on Roof',
                points: [{
                    number: '1',
                    description: 'It looks all sweet from the outside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, {
                    number: '2',
                    description: 'It\'s still shiney on the inside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, ],
            },
        }, {
            templateID: 1,
            name: 'Fire Damper/s',
            item: {
                title: 'Fire Damper/s',
                description: '',
                exampleUnits: 'AHU-1, All AHU\'s on Roof',
                points: [{
                    number: '1',
                    description: 'It looks all sweet from the outside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, {
                    number: '2',
                    description: 'It\'s still shiney on the inside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, ],
            },
        }, {
            templateID: 1,
            name: 'General',
            item: {
                title: 'General',
                description: '',
                exampleUnits: 'AHU-1, All AHU\'s on Roof',
                points: [{
                    number: '1',
                    description: 'It looks all sweet from the outside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, {
                    number: '2',
                    description: 'It\'s still shiney on the inside',
                    checked: null,
                    options: [{
                        id: 1,
                        name: 'O.K.'
                    }, {
                        id: 2,
                        name: 'Not OK'
                    }, ]
                }, ],
            }
        }, ];

        $scope.addTemplate = function(selectedTemplate) {
            if (selectedTemplate) {
                $scope.maintenance.items.push(selectedTemplate.item)
            }
        }

    }
])
