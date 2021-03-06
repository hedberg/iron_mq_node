// Generated by CoffeeScript 1.10.0
(function() {
  var Client, _, apiClient;

  _ = require('underscore');

  apiClient = require('./api_client');

  Client = (function() {
    var prepareIdsToRemove;

    function Client(options) {
      this.api = new apiClient.APIClient(options);
    }

    Client.prototype.queue = function(name) {
      return new Client(_.extend({}, this.api.options, {
        queue_name: name
      }));
    };

    Client.prototype.create_queue = function(queue_name, options, cb) {
      return this.api.queuesCreate(queue_name, {
        queue: options
      }, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.update_queue = function(queue_name, options, cb) {
      return this.api.queuesUpdate(queue_name, {
        queue: options
      }, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.queues = function(options, cb) {
      return this.api.queuesList(options, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.info = function(cb) {
      return this.api.queuesGet(this.api.options.queue_name, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.clear = function(cb) {
      return this.api.queuesClear(this.api.options.queue_name, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.update = function(options, cb) {
      return this.api.queuesUpdate(this.api.options.queue_name, {
        queue: options
      }, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.add_alerts = function(alerts, cb) {
      var options;
      if (!(alerts instanceof Array)) {
        alerts = [alerts];
      }
      options = {
        queue: {
          alerts: alerts
        }
      };
      return this.api.queuesUpdate(this.api.options.queue_name, options, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.clear_alerts = function(cb) {
      var options;
      options = {
        queue: {
          alerts: [{}]
        }
      };
      return this.api.queuesUpdate(this.api.options.queue_name, options, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.update_alerts = function(alerts, cb) {
      if (!(alerts instanceof Array)) {
        alerts = [alerts];
      }
      return this.api.queuesUpdateAlerts(this.api.options.queue_name, {
        alerts: alerts
      }, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.delete_alerts = function(alerts, cb) {
      if (!(alerts instanceof Array)) {
        alerts = [alerts];
      }
      return this.api.queuesDeleteAlerts(this.api.options.queue_name, {
        alerts: alerts
      }, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.delete_alert_by_id = function(alert_id, cb) {
      return this.api.queuesDeleteAlertById(this.api.options.queue_name, alert_id, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.add_subscribers = function(subscribers, cb) {
      if (!(subscribers instanceof Array)) {
        subscribers = [subscribers];
      }
      return this.api.queuesAddSubscribers(this.api.options.queue_name, {
        subscribers: subscribers
      }, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.rm_subscribers = function(subscribers, cb) {
      if (!(subscribers instanceof Array)) {
        subscribers = [subscribers];
      }
      return this.api.queuesRemoveSubscribers(this.api.options.queue_name, {
        subscribers: subscribers
      }, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.rpl_subscribers = function(subscribers, cb) {
      if (!(subscribers instanceof Array)) {
        subscribers = [subscribers];
      }
      return this.api.queuesReplaceSubscribers(this.api.options.queue_name, {
        subscribers: subscribers
      }, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.del_queue = function(cb) {
      return this.api.queuesDelete(this.api.options.queue_name, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.post = function(messages, cb) {
      if (!(messages instanceof Array)) {
        messages = [messages];
      }
      messages = _.map(messages, function(message) {
        if (typeof message === 'string') {
          return {
            body: message
          };
        } else {
          return message;
        }
      });
      return this.api.messagesPost(this.api.options.queue_name, messages, function(error, body) {
        if (error == null) {
          return cb(error, messages.length === 1 ? body.ids[0] : body.ids);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.get = function(options, cb) {
      return this.get_n(options, function(error, body) {
        if (error == null) {
          return cb(error, (options.n == null) || options.n === 1 ? body[0] : body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.reserve = function(options, cb) {
      return this.get_n(options, function(error, body) {
        if (error == null) {
          return cb(error, (options.n == null) || options.n === 1 ? body[0] : body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.get_n = function(options, cb) {
      return this.api.messagesGet(this.api.options.queue_name, options, function(error, body) {
        if (error == null) {
          return cb(error, body.messages || []);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.peek = function(options, cb) {
      return this.peek_n(options, function(error, body) {
        if (error == null) {
          return cb(error, (options.n == null) || options.n === 1 ? body[0] : body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.peek_n = function(options, cb) {
      return this.api.messagesPeek(this.api.options.queue_name, options, function(error, body) {
        if (error == null) {
          return cb(error, body.messages);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.del = function(message_id, options, cb) {
      return this.api.messagesDelete(this.api.options.queue_name, message_id, options, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.del_multiple = function(options, cb) {
      var ids;
      ids = prepareIdsToRemove(options);
      return this.api.messagesMultipleDelete(this.api.options.queue_name, ids, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.msg_get = function(message_id, cb) {
      return this.api.messagesGetById(this.api.options.queue_name, message_id, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.msg_touch = function(message_id, reservation_id, options, cb) {
      return this.api.messageTouch(this.api.options.queue_name, message_id, reservation_id, options, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.msg_release = function(message_id, reservation_id, options, cb) {
      return this.api.messageRelease(this.api.options.queue_name, message_id, reservation_id, options, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.msg_push_statuses = function(message_id, cb) {
      return this.api.messagesPushStatuses(this.api.options.queue_name, message_id, function(error, body) {
        if (error == null) {
          return cb(error, body);
        } else {
          return cb(error, body);
        }
      });
    };

    Client.prototype.del_msg_push_status = function(message_id, reservation_id, subscriber_name, cb) {
      return this.del(message_id, {
        reservation_id: reservation_id,
        subscriber_name: subscriber_name
      }, cb);
    };

    prepareIdsToRemove = function(options) {
      var body;
      body = {};
      if (options["ids"]) {
        body["ids"] = _.map(options["ids"], function(val) {
          return {
            id: val
          };
        });
      } else if (options["reservation_ids"]) {
        body["ids"] = _.map(options["reservation_ids"], function(val) {
          return {
            id: val.id,
            reservation_id: val.reservation_id
          };
        });
      }
      return body;
    };

    return Client;

  })();

  module.exports.Client = Client;

}).call(this);
