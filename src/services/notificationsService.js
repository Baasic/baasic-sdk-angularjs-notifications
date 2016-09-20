/* globals module */
/**
 * @module baasicNotificationsService
 * @description Baasic Notifications Service provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsService` uses `baasicNotificationsRouteService`.
*/
(function (angular, module, undefined){
    'use strict';
    module.service('baasicNotificationsService', ['baasicApiHttp', 'baasicApiService', 'baasicConstants', 'baasicNotificationsRouteService',
        function (baasicApiHttp, baasicApiService, baasicConstants, notificationsRouteService){
            return {
                publish: {
                    /**
                     * Returns a promise that is resolved once the create notification action has been performed; this action creates a new notification resource.
                     * @method publish.create
                     * @example 
                        baasicNotificationsService.create({
                            channels: ['<channel-name', '<channel-name>'],
                            moduleName: '<module-name>',
                            templateName: '<template-name>',
                            templateContext: {
                                prop1: <prop1-value>,
                                prop2: <prop2-value>
                            }
                        })
                        .success(function (data) {
                            // perform success action here
                        })
                        .error(function (response, status, headers, config) {
                            // perform error handling here
                        });
                     */ 					
                    create: function(data){
                        return baasicApiHttp.post(notificationsRouteService.publish.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                    },
                    batch: {
                        /**
                         * Returns a promise that is resolved once the create notification action has been performed; this action creates new notification resources.
                         * @method publish.batch.create       
                         * @example 
                            baasicNotificationsService.create([{
                                channels: ['<channel-name', '<channel-name>'],
                                moduleName: '<module-name>',
                                templateName: '<template-name>',
                                templateContext: {
                                    prop1: <prop1-value>,
                                    prop2: <prop2-value>
                                }
                            }])
                            .success(function (data) {
                                // perform success action here
                            })
                            .error(function (response, status, headers, config) {
                                // perform error handling here
                            });
                        */ 	
                        create: function(data){
                            return baasicApiHttp.post(notificationsRouteService.publish.create.batch.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                        }
                    }
                },
                subscriptions: {
                    users: {
                        create: function(data){

                        },

                        batch: {
                        
                        }
                    },
                    anonymous: {
                        batch: {
                        
                        }
                    }
                },
                registrations: {
                    users: {
                        batch: {
                        
                        }
                    },
                    anonymous: {
                        batch: {
                        
                        }
                    }
                },
                settings: {

                },

                /**
                 * Provides direct access to `baasicNotificationsRouteService`.
                 * @method
                 * @example baasicNotificationsService.routeService.publish.create.expand({});
                 */ 
                routeService: notificationsRouteService
            };
        }]);
}(angular, module));
/**
 * @overview 
 ***Notes:**
 - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
 - All end-point objects are transformed by the associated route service.
*/