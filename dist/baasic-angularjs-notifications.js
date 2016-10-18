(function (angular, undefined) { /* exported module */
    /** 
     * @description The angular.module is a global place for creating, registering or retrieving modules. All modules should be registered in an application using this mechanism. An angular module is a container for the different parts of your app - services, directives etc. In order to use `baasic.notifications` module functionality it must be added as a dependency to your app.
     * @module baasic.notifications
     * @example
     (function (Main) {
     'use strict';
     var dependencies = [
     "baasic.api",
     "baasic.membership",
     "baasic.security",
     "baasic.userProfile",
     "baasic.notifications",
     "baasic.article",
     "baasic.dynamicResource",
     "baasic.keyValue",
     "baasic.valueSet"
     ];
     Main.module = angular.module("myApp.Main", dependencies);
     }
     (MyApp.Modules.Main = {})); 
     */
    var module = angular.module('baasic.notifications', ['baasic.api']); /* globals module */
    /**
     * @module baasicNotificationsRouteService
     * @description Baasic Notifications Route Service provides Baasic route templates which can be expanded to Baasic REST URIs. Various services can use Baasic Notifications Route Service to obtain needed routes while other routes will be obtained through HAL. By convention, all route services use the same function names as their corresponding services.
     */
    (function (angular, module, undefined) {
        'use strict';
        module.service('baasicNotificationsRouteService', ['baasicUriTemplateService', function (uriTemplateService) {
            return {
                publish: {
                    /**
                     * Parses create publish route; this route does not expose any additional options.
                     * @method publish.create
                     * @example baasicNotificationsRouteService.publish.create.expand({});
                     */
                    create: uriTemplateService.parse('notifications/publish'),

                    batch: {
                        /**
                         * Parses create publish batch route; this route does not expose any additional options.
                         * @method publish.batch.create
                         * @example baasicNotificationsRouteService.publish.batch.create.expand({});
                         */
                        create: uriTemplateService.parse('notifications/publish/batch')
                    }
                },
                subscriptions: {
                    users: {
                        /**
                         * Parses create user subscription route; this route does not expose any additional options
                         * @method subscriptions.users.create
                         * @example baasicNotificationsRouteService.subscriptions.users.create.expand({});
                         */
                        create: uriTemplateService.parse('notifications/subscriptions'),

                        /**
                         * Parses find user subscriptions route which can be expanded with additional options. Supported items are: 
                         * - `searchQuery` - A string referencing user subscription properties using the phrase search.
                         * - `userIds` - Comma separated list of user identifiers.
                         * - `channels` - Comma separated list of channels.
                         * - `page` - A value used to set the page number, i.e. to retrieve certain user subscriptions subset from the storage.
                         * - `rpp` - A value used to limit the size of result set per page.
                         * - `sort` - A string used to set the user subscription property to sort the result collection by.
                         * - `embed` - Comma separated list of resources to be contained within the current representation.
                         * @method subscriptions.users.find
                         * @example 
                         baasicNotificationsRouteService.subscriptions.users.find.expand({
                         searchQuery: '<search-phrase>',
                         channels: '<channel-name>,<channel-name>'
                         });
                         */
                        find: uriTemplateService.parse('notifications/subscriptions/{?searchQuery,userIds,channels,page,rpp,sort,embed,fields}'),

                        /**
                         * Parses get user subscription route; this route should be expanded with the Id of user subscription resource.
                         * @method subscriptions.users.get
                         * @example
                         baasicNotificationsRouteService.subscriptions.users.get.expand({
                         id: '<subscription-id>'
                         });
                         */
                        get: uriTemplateService.parse('notifications/subscriptions/{id}/{?embed,fields}'),

                        batch: {
                            /**
                             * Parses create user subscriptions batch route; this route does not expose any additional options
                             * @method subscriptions.users.batch.create
                             * @example baasicNotificationsRouteService.subscriptions.users.batch.create.expand({});
                             */
                            create: uriTemplateService.parse('notifications/subscriptions/batch'),

                            /**
                             * Parses remove user subscriptions batch route; this route does not expose any additional options
                             * @method subscriptions.users.batch.remove
                             * @example baasicNotificationsRouteService.subscriptions.users.batch.remove.expand({});
                             */
                            remove: uriTemplateService.parse('notifications/subscriptions/batch'),

                            /**
                             * Parses update user subscriptions batch route; this route does not expose any additional options
                             * @method subscriptions.users.batch.update
                             * @example baasicNotificationsRouteService.subscriptions.users.batch.update.expand({});
                             */
                            update: uriTemplateService.parse('notifications/subscriptions/batch')
                        }
                    },
                    anonymous: {
                        /**
                         * Parses create anonymous subscription route; this route does not expose any additional options
                         * @method subscriptions.anonymous.create
                         * @example baasicNotificationsRouteService.subscriptions.anonymous.create.expand({});
                         */
                        create: uriTemplateService.parse('notifications/subscriptions/anonymous'),

                        /**
                         * Parses find anonymous subscriptions route which can be expanded with additional options. Supported items are: 
                         * - `searchQuery` - A string referencing user subscription properties using the phrase search.
                         * - `registrationIds` - Comma separated list of anonymous registration identifiers.
                         * - `channels` - Comma separated list of channels.
                         * - `page` - A value used to set the page number, i.e. to retrieve certain user subscription subset from the storage.
                         * - `rpp` - A value used to limit the size of result set per page.
                         * - `sort` - A string used to set the user subscription property to sort the result collection by.
                         * - `embed` - Comma separated list of resources to be contained within the current representation.
                         * @method        
                         * @example 
                         baasicNotificationsRouteService.subscriptions.anonymous.find.expand({
                         searchQuery: '<search-phrase>',
                         channels: '<channel-name>,<channel-name>'
                         });
                         */
                        find: uriTemplateService.parse('notifications/subscriptions/anonymous/{?searchQuery,registrationIds,channels,page,rpp,sort,embed,fields}'),

                        /**
                         * Parses get anonymous subscription route; this route should be expanded with the Id of anonymous subscription resource.
                         * @method subscriptions.anonymous.get
                         * @example
                         baasicNotificationsRouteService.subscriptions.anonymous.get.expand({
                         id: '<subscription-id>'
                         });
                         */
                        get: uriTemplateService.parse('notifications/subscriptions/anonymous/{id}/{?embed,fields}'),

                        batch: {
                            /**
                             * Parses create anonymous subscription batch route; this route does not expose any additional options
                             * @method subscriptions.anonymous.batch.create
                             * @example baasicNotificationsRouteService.subscriptions.anonymous.batch.create.expand({});
                             */
                            create: uriTemplateService.parse('notifications/subscriptions/anonymous/batch'),

                            /**
                             * Parses remove anonymous subscription batch route; this route does not expose any additional options
                             * @method subscriptions.anonymous.batch.remove
                             * @example baasicNotificationsRouteService.subscriptions.anonymous.batch.remove.expand({});
                             */
                            remove: uriTemplateService.parse('notifications/subscriptions/anonymous/batch'),

                            /**
                             * Parses update anonymous subscription batch route; this route does not expose any additional options
                             * @method subscriptions.anonymous.batch.update
                             * @example baasicNotificationsRouteService.subscriptions.anonymous.batch.update.expand({});
                             */
                            update: uriTemplateService.parse('notifications/subscriptions/anonymous/batch')
                        }
                    }
                },
                registrations: {
                    users: {
                        /**
                         * Parses create users registrations route; this route does not expose any additional options
                         * @method registrations.users.create
                         * @example baasicNotificationsRouteService.registrations.users.create.expand({});
                         */
                        create: uriTemplateService.parse('notifications/registrations'),

                        /**
                         * Parses find users registrations route which can be expanded with additional options. Supported items are: 
                         * - `searchQuery` - A string referencing user subscription properties using the phrase search.
                         * - `userIds` - Comma separated list of user identifiers.
                         * - `providers` - Comma separated list of notification providers.
                         * - `page` - A value used to set the page number, i.e. to retrieve certain user subscription subset from the storage.
                         * - `rpp` - A value used to limit the size of result set per page.
                         * - `sort` - A string used to set the user subscription property to sort the result collection by.
                         * - `embed` - Comma separated list of resources to be contained within the current representation.
                         * @method        
                         * @example 
                         baasicNotificationsRouteService.registrations.users.find.expand({
                         searchQuery: '<search-phrase>',
                         providers: '<provider-name>,<provider-name>'
                         });
                         */
                        find: uriTemplateService.parse('notifications/registrations/{?searchQuery,userIds,providers,page,rpp,sort,embed,fields}'),

                        /**
                         * Parses get users registrations route; this route should be expanded with the Id of users registrations resource.
                         * @method registrations.users.get
                         * @example
                         baasicNotificationsRouteService.registrations.users.get.expand({
                         id: '<registration-id>'
                         });
                         */
                        get: uriTemplateService.parse('notifications/registrations/{id}/{?embed}'),

                        batch: {
                            /**
                             * Parses create users registrations batch route; this route does not expose any additional options
                             * @method registrations.users.batch.create
                             * @example baasicNotificationsRouteService.registrations.users.batch.create.expand({});
                             */
                            create: uriTemplateService.parse('notifications/registrations/batch'),

                            /**
                             * Parses remove users registrations batch route; this route does not expose any additional options
                             * @method registrations.users.batch.remove
                             * @example baasicNotificationsRouteService.registrations.users.batch.remove.expand({});
                             */
                            remove: uriTemplateService.parse('notifications/registrations/batch'),

                            /**
                             * Parses update users registrations batch route; this route does not expose any additional options
                             * @method registrations.users.batch.update
                             * @example baasicNotificationsRouteService.registrations.users.batch.update.expand({});
                             */
                            update: uriTemplateService.parse('notifications/registrations/batch'),
                        }
                    },
                    anonymous: {
                        /**
                         * Parses create anonymous registrations route; this route does not expose any additional options
                         * @method registrations.anonymous.create
                         * @example baasicNotificationsRouteService.registrations.anonymous.create.expand({});
                         */
                        create: uriTemplateService.parse('notifications/registrations/anonymous'),

                        /**
                         * Parses find anonymous registrations route which can be expanded with additional options. Supported items are: 
                         * - `searchQuery` - A string referencing user subscription properties using the phrase search.
                         * - `providers` - Comma separated list of notification providers.
                         * - `page` - A value used to set the page number, i.e. to retrieve certain user subscription subset from the storage.
                         * - `rpp` - A value used to limit the size of result set per page.
                         * - `sort` - A string used to set the user subscription property to sort the result collection by.
                         * - `embed` - Comma separated list of resources to be contained within the current representation.
                         * @method        
                         * @example 
                         baasicNotificationsRouteService.registrations.anonymous.find.expand({
                         searchQuery: '<search-phrase>',
                         providers: '<provider-name>,<provider-name>'
                         });
                         */
                        find: uriTemplateService.parse('notifications/registrations/anonymous/{?searchQuery,providers,page,rpp,sort,embed,fields}'),

                        /**
                         * Parses get anonymous registrations route; this route should be expanded with the Id of anonymous registrations resource.
                         * @method registrations.anonymous.get
                         * @example
                         baasicNotificationsRouteService.registrations.anonymous.get.expand({
                         id: '<registration-id>'
                         });
                         */
                        get: uriTemplateService.parse('notifications/registrations/anonymous/{id}/{?embed}'),

                        batch: {
                            /**
                             * Parses create anonymous registrations batch route; this route does not expose any additional options
                             * @method registrations.anonymous.batch.create
                             * @example baasicNotificationsRouteService.registrations.anonymous.batch.create.expand({});
                             */
                            create: uriTemplateService.parse('notifications/registrations/anonymous/batch'),

                            /**
                             * Parses remove anonymous registrations batch route; this route does not expose any additional options
                             * @method registrations.anonymous.batch.remove
                             * @example baasicNotificationsRouteService.registrations.anonymous.batch.remove.expand({});
                             */
                            remove: uriTemplateService.parse('notifications/registrations/anonymous/batch'),

                            /**
                             * Parses update anonymous registrations batch route; this route does not expose any additional options
                             * @method registrations.anonymous.batch.update
                             * @example baasicNotificationsRouteService.registrations.anonymous.batch.update.expand({});
                             */
                            update: uriTemplateService.parse('notifications/registrations/anonymous/batch')
                        }
                    }
                },
                settings: {
                    /**
                     * Parses get notification settings route; this route should be expanded with the notification provider name.
                     * @method settings.get
                     * @example
                     baasicNotificationsRouteService.settings.get.expand({
                     provider: '<provider-name>'
                     });
                     */
                    get: uriTemplateService.parse('notifications/settings/{provider}'),

                    /**
                     * Parses update notification settings route; this route should be expanded with the notification provider name.
                     * @method settings.update
                     * @example
                     baasicNotificationsRouteService.settings.update.expand({
                     provider: '<provider-name>'
                     });
                     */
                    update: uriTemplateService.parse('notifications/settings/{provider}')
                }
            };
        }]);
    }(angular, module));
    /**
     * @overview 
     ***Notes:**
     - Refer to the [REST API documentation](https://github.com/Baasic/baasic-rest-api/wiki) for detailed information about available Baasic REST API end-points.
     - [URI Template](https://github.com/Baasic/uritemplate-js) syntax enables expanding the Baasic route templates to Baasic REST URIs providing it with an object that contains URI parameters.
     - All end-point objects are transformed by the associated route service.
     */

    /* globals module */
    /**
     * @module baasicNotificationsService
     * @description Baasic Notifications Service provides an easy way to consume Baasic Notifications REST API end-points. In order to obtain needed routes `baasicNotificationsService` uses `baasicNotificationsRouteService`.
     */
    (function (angular, module, undefined) {
        'use strict';
        module.service('baasicNotificationsService', ['baasicApiHttp', 'baasicApiService', 'baasicConstants', 'baasicNotificationsRouteService', function (baasicApiHttp, baasicApiService, baasicConstants, notificationsRouteService) {
            return {
                publish: {
                    /**
                     * Returns a promise that is resolved once the create notification action has been performed; this action creates a new notification resource.
                     * @method publish.create
                     * @example 
                     baasicNotificationsService.publish.create({
                     channels: ['<channel-name', '<channel-name>'],
                     moduleName: '<module-name>',
                     templateName: '<template-name>',
                     templateContext: {
                     prop1: '<prop1-value>',
                     prop2: '<prop2-value>'
                     }
                     })
                     .success(function (data) {
                     // perform success action here
                     })
                     .error(function (response, status, headers, config) {
                     // perform error handling here
                     });
                     */
                    create: function (data) {
                        return baasicApiHttp.post(notificationsRouteService.publish.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                    },
                    batch: {
                        /**
                         * Returns a promise that is resolved once the create notification action has been performed; this action creates new notification resources.
                         * @method publish.batch.create       
                         * @example 
                         baasicNotificationsService.publish.create([{
                         channels: ['<channel-name', '<channel-name>'],
                         moduleName: '<module-name>',
                         templateName: '<template-name>',
                         templateContext: {
                         prop1: '<prop1-value>',
                         prop2: '<prop2-value>'
                         }
                         }])
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        create: function (data) {
                            return baasicApiHttp.post(notificationsRouteService.publish.batch.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                        }
                    }
                },
                subscriptions: {
                    users: {
                        /**
                         * Returns a promise that is resolved once the create user subscription action has been performed; this action creates a new user subscription resource.
                         * @method subscriptions.users.create
                         * @example 
                         baasicNotificationsService.subscriptions.users.create({
                         channel: '<channel-name>',
                         userId: '<user-id>'
                         })
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        create: function (data) {
                            return baasicApiHttp.post(notificationsRouteService.subscriptions.users.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                        },

                        /**
                         * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user subscription resources matching the given criteria.
                         * @method subscriptions.users.find       
                         * @example 
                         baasicNotificationsService.subscriptions.users.find({
                         pageNumber : 1,
                         pageSize : 10,
                         orderBy : '<field>',
                         orderDirection : '<asc|desc>',
                         search : '<search-phrase>',
                         channels: '<channel-name1>,<channel-name2>',
                         userIds: '<user-id1>,<user-id2>',
                         embed: '<embed>'
                         })
                         .success(function (collection) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        find: function (options) {
                            return baasicApiHttp.get(notificationsRouteService.subscriptions.users.find.expand(baasicApiService.findParams(options)));
                        },

                        /**
                         * Returns a promise that is resolved once the get action has been performed. Success response returns the specified user subscription resource.
                         * @method subscriptions.users.get       
                         * @example 
                         baasicNotificationsService.subscriptions.users.get('<subscription-id>')
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        get: function (id, options) {
                            return baasicApiHttp.get(notificationsRouteService.subscriptions.users.get.expand(baasicApiService.getParams(id, options)));
                        },

                        /**
                         * Returns a promise that is resolved once the remove user subscription action has been performed. This action will remove a user subscription resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                         ```
                         var params = baasicApiService.removeParams(subscription);
                         var uri = params['model'].links('delete').href;
                         ```
                         * @method subscriptions.users.remove        
                         * @example 
                         // subscription is a resource previously fetched using get action.
                         baasicNotificationsService.subscriptions.users.remove(subscription)
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        remove: function (data) {
                            var params = baasicApiService.removeParams(data);
                            return baasicApiHttp.delete(params[baasicConstants.modelPropertyName].links('delete').href);
                        },

                        /**
                         * Returns a promise that is resolved once the update user subscription action has been performed; this action updates a user subscription resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                         ```
                         var params = baasicApiService.updateParams(subscription);
                         var uri = params['model'].links('put').href;
                         ```
                         * @method subscriptions.users.update        
                         * @example 
                         // subscription is a resource previously fetched using get action.
                         subscription.channel = '<channel-name>';
                         baasicNotificationsService.subscriptions.users.update(subscription)
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        update: function (data) {
                            var params = baasicApiService.updateParams(data);
                            return baasicApiHttp.put(params[baasicConstants.modelPropertyName].links('put').href, params[baasicConstants.modelPropertyName]);
                        },
                        batch: {
                            /**
                             * Returns a promise that is resolved once the create user subscription action has been performed; this action creates new user subscription resources.
                             * @method subscriptions.users.batch.create       
                             * @example 
                             baasicNotificationsService.subscriptions.users.batch.create([{
                             channel: '<channel-name>',
                             userId: '<user-id>'
                             }])
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            create: function (data) {
                                return baasicApiHttp.post(notificationsRouteService.subscriptions.users.batch.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                            },

                            /**
                             * Returns a promise that is resolved once the remove action has been performed. This action will remove user subscription resources from the system if successfully completed. 
                             * @method subscriptions.users.batch.remove       
                             * @example 			 
                             baasicNotificationsService.subscriptions.users.batch.remove(subscriptionIds)
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            remove: function (ids) {
                                return baasicApiHttp({
                                    url: notificationsRouteService.subscriptions.users.batch.remove.expand(),
                                    method: 'DELETE',
                                    data: ids
                                });
                            },

                            /**
                             * Returns a promise that is resolved once the update user subscriptions action has been performed; this action updates specified user subscription resources.
                             * @method subscriptions.users.batch.update       
                             * @example 
                             baasicNotificationsService.subscriptions.users.batch.update(subscriptions)
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            update: function (data) {
                                return baasicApiHttp.put(notificationsRouteService.subscriptions.users.batch.update.expand(), baasicApiService.updateParams(data)[baasicConstants.modelPropertyName]);
                            }
                        }
                    },
                    anonymous: {
                        /**
                         * Returns a promise that is resolved once the create anonymous subscription action has been performed; this action creates a new anonymous subscription resource.
                         * @method subscriptions.anonymous.create
                         * @example 
                         baasicNotificationsService.subscriptions.anonymous.create({
                         channel: '<channel-name>',
                         registrationId: '<registration-id>'
                         })
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        create: function (data) {
                            return baasicApiHttp.post(notificationsRouteService.subscriptions.anonymous.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                        },

                        /**
                         * Returns a promise that is resolved once the find action has been performed. Success response returns a list of anonymous subscription resources matching the given criteria.
                         * @method subscriptions.anonymous.find       
                         * @example 
                         baasicNotificationsService.subscriptions.anonymous.find({
                         pageNumber : 1,
                         pageSize : 10,
                         orderBy : '<field>',
                         orderDirection : '<asc|desc>',
                         search : '<search-phrase>',
                         channels: '<channel-name1>,<channel-name2>',
                         registrationIds: '<registration-id1>,<registration-id2>',
                         embed: '<embed>'
                         })
                         .success(function (collection) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        find: function (options) {
                            return baasicApiHttp.get(notificationsRouteService.subscriptions.anonymous.find.expand(baasicApiService.findParams(options)));
                        },

                        /**
                         * Returns a promise that is resolved once the get action has been performed. Success response returns the specified anonymous subscription resource.
                         * @method subscriptions.anonymous.get       
                         * @example 
                         baasicNotificationsService.subscriptions.anonymous.get('<subscription-id>')
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        get: function (id, options) {
                            return baasicApiHttp.get(notificationsRouteService.subscriptions.anonymous.get.expand(baasicApiService.getParams(id, options)));
                        },

                        /**
                         * Returns a promise that is resolved once the remove anonymous subscription action has been performed. This action will remove a anonymous subscription resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                         ```
                         var params = baasicApiService.removeParams(subscription);
                         var uri = params['model'].links('delete').href;
                         ```
                         * @method subscriptions.anonymous.remove        
                         * @example 
                         // subscription is a resource previously fetched using get action.
                         baasicNotificationsService.subscriptions.anonymous.remove(subscription)
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        remove: function (data) {
                            var params = baasicApiService.removeParams(data);
                            return baasicApiHttp.delete(params[baasicConstants.modelPropertyName].links('delete').href);
                        },

                        /**
                         * Returns a promise that is resolved once the update anonymous subscription action has been performed; this action updates a anonymous subscription resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                         ```
                         var params = baasicApiService.updateParams(subscription);
                         var uri = params['model'].links('put').href;
                         ```
                         * @method subscriptions.anonymous.update        
                         * @example 
                         // subscription is a resource previously fetched using get action.
                         subscription.channel = '<channel-name>';
                         baasicNotificationsService.update(subscription)
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        update: function (data) {
                            var params = baasicApiService.updateParams(data);
                            return baasicApiHttp.put(params[baasicConstants.modelPropertyName].links('put').href, params[baasicConstants.modelPropertyName]);
                        },
                        batch: {
                            /**
                             * Returns a promise that is resolved once the create anonymous subscription action has been performed; this action creates new anonymous subscription resources.
                             * @method subscriptions.anonymous.batch.create       
                             * @example 
                             baasicNotificationsService.subscriptions.anonymous.batch.create([{
                             channel: '<channel-name>',
                             registrationId: '<registration-id>'
                             }])
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            create: function (data) {
                                return baasicApiHttp.post(notificationsRouteService.subscriptions.anonymous.batch.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                            },

                            /**
                             * Returns a promise that is resolved once the remove action has been performed. This action will remove anonymous subscription resources from the system if successfully completed. 
                             * @method subscriptions.anonymous.batch.remove       
                             * @example 			 
                             baasicNotificationsService.subscriptions.anonymous.batch.remove(subscriptionIds)
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            remove: function (ids) {
                                return baasicApiHttp({
                                    url: notificationsRouteService.subscriptions.anonymous.batch.remove.expand(),
                                    method: 'DELETE',
                                    data: ids
                                });
                            },

                            /**
                             * Returns a promise that is resolved once the update anonymous subscriptions action has been performed; this action updates specified anonymous subscription resources.
                             * @method subscriptions.anonymous.batch.update       
                             * @example 
                             baasicNotificationsService.subscriptions.anonymous.batch.update(subscriptions)
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            update: function (data) {
                                return baasicApiHttp.put(notificationsRouteService.subscriptions.anonymous.batch.update.expand(), baasicApiService.updateParams(data)[baasicConstants.modelPropertyName]);
                            }
                        }
                    }
                },
                registrations: {
                    users: {
                        /**
                         * Returns a promise that is resolved once the create user registration action has been performed; this action creates a new user registration resource.
                         * @method registrations.users.create
                         * @example 
                         baasicNotificationsService.registrations.users.create({
                         provider: '<provider-name>',
                         providerData: <provider-data>,
                         userId: '<user-id>'
                         })
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        create: function (data) {
                            return baasicApiHttp.post(notificationsRouteService.registrations.users.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                        },

                        /**
                         * Returns a promise that is resolved once the find action has been performed. Success response returns a list of user registrations resources matching the given criteria.
                         * @method registrations.users.find       
                         * @example 
                         baasicNotificationsService.registrations.users.find({
                         pageNumber : 1,
                         pageSize : 10,
                         orderBy : '<field>',
                         orderDirection : '<asc|desc>',
                         search : '<search-phrase>',
                         providers: '<provider-name1>,<provider-name2>',
                         userIds: '<user-id1>,<user-id2>',
                         embed: '<embed>'
                         })
                         .success(function (collection) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        find: function (options) {
                            return baasicApiHttp.get(notificationsRouteService.registrations.users.find.expand(baasicApiService.findParams(options)));
                        },

                        /**
                         * Returns a promise that is resolved once the get action has been performed. Success response returns the specified user registrations resource.
                         * @method registrations.users.get       
                         * @example 
                         baasicNotificationsService.registrations.users.get('<registration-id>')
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        get: function (id, options) {
                            return baasicApiHttp.get(notificationsRouteService.registrations.users.get.expand(baasicApiService.getParams(id, options)));
                        },

                        /**
                         * Returns a promise that is resolved once the remove user registrations action has been performed. This action will remove a user registrations resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                         ```
                         var params = baasicApiService.removeParams(registration);
                         var uri = params['model'].links('delete').href;
                         ```
                         * @method registrations.users.remove        
                         * @example 
                         // registration is a resource previously fetched using get action.
                         baasicNotificationsService.registrations.users.remove(registration)
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        remove: function (data) {
                            var params = baasicApiService.removeParams(data);
                            return baasicApiHttp.delete(params[baasicConstants.modelPropertyName].links('delete').href);
                        },

                        /**
                         * Returns a promise that is resolved once the update user registration action has been performed; this action updates a user registration resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                         ```
                         var params = baasicApiService.updateParams(subsregistrationcription);
                         var uri = params['model'].links('put').href;
                         ```
                         * @method registrations.users.update        
                         * @example 
                         // registration is a resource previously fetched using get action.
                         registration.provider = '<provider-name>';
                         baasicNotificationsService.registrations.users.update(registration)
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        update: function (data) {
                            var params = baasicApiService.updateParams(data);
                            return baasicApiHttp.put(params[baasicConstants.modelPropertyName].links('put').href, params[baasicConstants.modelPropertyName]);
                        },
                        batch: {
                            /**
                             * Returns a promise that is resolved once the create user registration action has been performed; this action creates new user registration resources.
                             * @method registrations.users.batch.create       
                             * @example 
                             baasicNotificationsService.registrations.users.batch.create([{
                             provider: '<provider-name>',
                             providerData: <provider-data>,
                             userId: '<user-id>'
                             }])
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            create: function (data) {
                                return baasicApiHttp.post(notificationsRouteService.registrations.users.batch.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                            },

                            /**
                             * Returns a promise that is resolved once the remove action has been performed. This action will remove user registration resources from the system if successfully completed. 
                             * @method registrations.users.batch.remove       
                             * @example 			 
                             baasicNotificationsService.registrations.users.batch.remove(subscriptionIds)
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            remove: function (ids) {
                                return baasicApiHttp({
                                    url: notificationsRouteService.registrations.users.batch.remove.expand(),
                                    method: 'DELETE',
                                    data: ids
                                });
                            },

                            /**
                             * Returns a promise that is resolved once the update user registration action has been performed; this action updates specified user registration resources.
                             * @method registrations.users.batch.update       
                             * @example 
                             baasicNotificationsService.registrations.users.batch.update(registrations)
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            update: function (data) {
                                return baasicApiHttp.put(notificationsRouteService.registrations.users.batch.update.expand(), baasicApiService.updateParams(data)[baasicConstants.modelPropertyName]);
                            }
                        }
                    },
                    anonymous: {
                        /**
                         * Returns a promise that is resolved once the create anonymous registration action has been performed; this action creates a new anonymous registration resource.
                         * @method registrations.anonymous.create
                         * @example 
                         baasicNotificationsService.registrations.anonymous.create({
                         provider: '<provider-name>',
                         providerdata: <provider-data>,
                         expirationData: '<expiration-date>'
                         })
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        create: function (data) {
                            return baasicApiHttp.post(notificationsRouteService.registrations.anonymous.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                        },

                        /**
                         * Returns a promise that is resolved once the find action has been performed. Success response returns a list of anonymous registration resources matching the given criteria.
                         * @method registrations.anonymous.find       
                         * @example 
                         baasicNotificationsService.registrations.anonymous.find({
                         pageNumber : 1,
                         pageSize : 10,
                         orderBy : '<field>',
                         orderDirection : '<asc|desc>',
                         search : '<search-phrase>',
                         providers: '<provider-name1>,<provider-name2>',
                         embed: '<embed>'
                         })
                         .success(function (collection) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        find: function (options) {
                            return baasicApiHttp.get(notificationsRouteService.registrations.anonymous.find.expand(baasicApiService.findParams(options)));
                        },

                        /**
                         * Returns a promise that is resolved once the get action has been performed. Success response returns the specified anonymous registration resource.
                         * @method registrations.anonymous.get       
                         * @example 
                         baasicNotificationsService.registrations.anonymous.get('<registration-id>')
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        get: function (id, options) {
                            return baasicApiHttp.get(notificationsRouteService.registrations.anonymous.get.expand(baasicApiService.getParams(id, options)));
                        },

                        /**
                         * Returns a promise that is resolved once the remove anonymous registration action has been performed. This action will remove a anonymous registration resource from the system if successfully completed. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                         ```
                         var params = baasicApiService.removeParams(registration);
                         var uri = params['model'].links('delete').href;
                         ```
                         * @method registrations.anonymous.remove        
                         * @example 
                         // registration is a resource previously fetched using get action.
                         baasicNotificationsService.registrations.anonymous.remove(registration)
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        remove: function (data) {
                            var params = baasicApiService.removeParams(data);
                            return baasicApiHttp.delete(params[baasicConstants.modelPropertyName].links('delete').href);
                        },

                        /**
                         * Returns a promise that is resolved once the update anonymous registration action has been performed; this action updates a anonymous registration resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                         ```
                         var params = baasicApiService.updateParams(registration);
                         var uri = params['model'].links('put').href;
                         ```
                         * @method registrations.anonymous.update        
                         * @example 
                         // registration is a resource previously fetched using get action.
                         subscription.provider = '<provider-name>';
                         baasicNotificationsService.update(registration)
                         .success(function (data) {
                         // perform success action here
                         })
                         .error(function (response, status, headers, config) {
                         // perform error handling here
                         });
                         */
                        update: function (data) {
                            var params = baasicApiService.updateParams(data);
                            return baasicApiHttp.put(params[baasicConstants.modelPropertyName].links('put').href, params[baasicConstants.modelPropertyName]);
                        },
                        batch: {
                            /**
                             * Returns a promise that is resolved once the create anonymous registration action has been performed; this action creates new anonymous registration resources.
                             * @method registrations.anonymous.batch.create       
                             * @example 
                             baasicNotificationsService.registrations.anonymous.batch.create([{
                             provider: '<provider-name>',
                             providerData: <provider-data>,
                             expirationDate: <expiration-date>
                             }])
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            create: function (data) {
                                return baasicApiHttp.post(notificationsRouteService.registrations.anonymous.batch.create.expand(), baasicApiService.createParams(data)[baasicConstants.modelPropertyName]);
                            },

                            /**
                             * Returns a promise that is resolved once the remove action has been performed. This action will remove anonymous registration resources from the system if successfully completed. 
                             * @method registrations.anonymous.batch.remove       
                             * @example 			 
                             baasicNotificationsService.registrations.anonymous.batch.remove(subscriptionIds)
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            remove: function (ids) {
                                return baasicApiHttp({
                                    url: notificationsRouteService.registrations.anonymous.batch.remove.expand(),
                                    method: 'DELETE',
                                    data: ids
                                });
                            },

                            /**
                             * Returns a promise that is resolved once the update anonymous registration action has been performed; this action updates specified anonymous registration  resources.
                             * @method registrations.anonymous.batch.update       
                             * @example 
                             baasicNotificationsService.registrations.anonymous.batch.update(registrations)
                             .success(function (data) {
                             // perform success action here
                             })
                             .error(function (response, status, headers, config) {
                             // perform error handling here
                             });
                             */
                            update: function (data) {
                                return baasicApiHttp.put(notificationsRouteService.registrations.anonymous.batch.update.expand(), baasicApiService.updateParams(data)[baasicConstants.modelPropertyName]);
                            }
                        }
                    }
                },
                settings: {
                    /**
                     * Returns a promise that is resolved once the get action has been performed. Success response returns the specified setting resource.
                     * @method settings.get       
                     * @example 
                     baasicNotificationsService.settings.get('<provider-name>')
                     .success(function (data) {
                     // perform success action here
                     })
                     .error(function (response, status, headers, config) {
                     // perform error handling here
                     });
                     */
                    get: function (provider) {
                        return baasicApiHttp.get(notificationsRouteService.settings.get.expand(baasicApiService.getParams(provider)));
                    },

                    /**
                     * Returns a promise that is resolved once the update settings action has been performed; this action updates a settings resource. This route uses HAL enabled objects to obtain routes and therefore it doesn't apply `baasicNotificationsRouteService` route template. Here is an example of how a route can be obtained from HAL enabled objects:
                     ```
                     var params = baasicApiService.updateParams(settings);
                     var uri = params['model'].links('put').href;
                     ```
                     * @method settings.update        
                     * @example 
                     // settings is a resource previously fetched using get action.
                     baasicNotificationsService.update(settings)
                     .success(function (data) {
                     // perform success action here
                     })
                     .error(function (response, status, headers, config) {
                     // perform error handling here
                     });
                     */
                    update: function (data) {
                        var params = baasicApiService.updateParams(data);
                        return baasicApiHttp.put(params[baasicConstants.modelPropertyName].links('put').href, params[baasicConstants.modelPropertyName]);
                    }
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
})(angular);