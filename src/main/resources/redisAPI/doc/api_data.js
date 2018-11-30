define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "jedis.exists(key);检查给定 key 是否存在。",
    "name": "exists",
    "group": "exists",
    "version": "0.1.0",
    "description": "<p>是否存在该key，不管该key是什么类型的</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>存在</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>不存在</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "exists"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.expire(key, seconds);为给定 key 设置生存时间，当 key 过期时(生存时间为 0 )，它会被自动删除。",
    "name": "expireDao",
    "group": "expireDao",
    "version": "0.1.0",
    "description": "<p>设置key的的过期时间 注： 1、key必须存在 2、seconds必须大于0，seconds表示设置多少秒</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "seconds",
            "description": "<p>过期时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>设置成功</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "expireDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.pttl(key);以毫秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。",
    "name": "getExpireMills",
    "group": "getExpireMills",
    "version": "0.1.0",
    "description": "<p>获取key的过期时间，以毫秒为单位返回 注： 1、key必须存在 2、-1：表示key永久 3、-2：表示key过期，或异常</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "time",
            "description": "<p>long 剩余生存时间</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "getExpireMills"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.ttl(key);以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。",
    "name": "getExpire",
    "group": "getExpire",
    "version": "0.1.0",
    "description": "<p>获取key的过期时间，以秒为单位返回 注： 1、key必须存在 2、-1：表示key永久 3、-2：表示key过期，或异常</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "time",
            "description": "<p>long剩余生存时间</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "getExpire"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.keys(pattern);查找所有符合给定模式 pattern 的 key 。",
    "name": "getKeys",
    "group": "getKeys",
    "version": "0.1.0",
    "description": "<p>获取指定正则的所有keys 注： 如果要获取所有key，则pattern为&quot;<em>&quot; KEYS * 匹配数据库中所有 key 。 KEYS h?llo 匹配 hello ， hallo 和 hxllo 等。 KEYS h</em>llo 匹配 hllo 和 heeeeello 等。 KEYS h[ae]llo 匹配 hello 和 hallo ，但不匹配 hillo 。 特殊符号用 \\ 隔开</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pattern",
            "description": "<p>正则</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "long",
            "description": "<p>Set<String>剩余生存时间</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "getKeys"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.lset(key, index, value);将列表 key 下标为 index 的元素的值设置为 value 。",
    "name": "listAddToFooterDao",
    "group": "listAddToFooterDao",
    "version": "0.1.0",
    "description": "<p>设置指定索引的值，该key必须存在且为List类型的</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "index",
            "description": "<p>索引</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>存储成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>存储失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "listAddToFooterDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.rpush(key, value);将一个或多个值 value 插入到列表 key 的尾部",
    "name": "listAddToFooterDao",
    "group": "listAddToFooterDao",
    "version": "0.1.0",
    "description": "<p>如果有多个 value 值，那么各个 value 值按从左到右的顺序依次插入到表尾：比如对一个空列表 mylist 执行 RPUSH mylist a b c ，得出的结果列表为 a b c 将key-values往List尾部添加，  该kye必须为List类型，或该key存在</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>long执行 LPUSH 命令后，返回列表的长度。（添加到list的索引，如果添加失败就返回-1？）</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "listAddToFooterDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.lpush(key, value);将一个或多个值 value 插入到列表 key 的表头",
    "name": "listAddToHeaderDao",
    "group": "listAddToHeaderDao",
    "version": "0.1.0",
    "description": "<p>如果有多个 value 值，那么各个 value 值按从左到右的顺序依次插入到表头： 比如说，对空列表 mylist 执行命令 LPUSH mylist a b c ，列表的值将是 c b a 将key-values往List头部添加， 该kye必须为List类型，或该key存在</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>long执行 LPUSH 命令后，返回列表的长度。（添加到list的索引，如果添加失败就返回-1？）</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "listAddToHeaderDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.lindex(key, index);返回列表 key 中，下标为 index 的元素。",
    "name": "listGetByIndex",
    "group": "listGetByIndex",
    "version": "0.1.0",
    "description": "<p>获取List指定索引的值，如果该key存在，或不是List的就返回null</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "index",
            "description": "<p>索引</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "string",
            "description": "<p>返回指定索引的值</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "listGetByIndex"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.rpop(key);移除并返回列表 key 的尾元素。",
    "name": "listRemoveEndDao",
    "group": "listRemoveEndDao",
    "version": "0.1.0",
    "description": "<p>移除List最后一条数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "string",
            "description": "<p>返回移除的值，如果key不存在，或key不是list，返回null</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "listRemoveEndDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.lpop(key);移除并返回列表 key 的头元素。",
    "name": "listRemoveFirstDao",
    "group": "listRemoveFirstDao",
    "version": "0.1.0",
    "description": "<p>移除List第一条数据</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "string",
            "description": "<p>返回移除的值，如果key不存在，或key不是list，返回null</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "listRemoveFirstDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.lrem(key, index, value)移除并返回列表 key 的尾元素。",
    "name": "listRemoveIndexIFEqValueDao",
    "group": "listRemoveIndexIFEqValueDao",
    "version": "0.1.0",
    "description": "<p>移除List指定index索引开始，往表尾搜索；如果index为负数，表示从末尾倒数多少个开始往表头搜索。移除与传人value值相等的所有值 根据参数 count 的值，移除列表中与参数 value 相等的元素。 count 的值可以是以下几种： count &gt; 0 : 从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count 。 count &lt; 0 : 从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值。 count = 0 : 移除表中所有与 value 相等的值。</p> <h4>先创建一个表，内容排列是</h4> <h4>morning hello morning helllo morning</h4> <p><code>redis&gt; LPUSH greet &quot;morning&quot;</code><br> <code>(integer) 1</code><br> <code>redis&gt; LPUSH greet &quot;hello&quot;</code><br> <code>(integer) 2</code><br> <code>redis&gt; LPUSH greet &quot;morning&quot;</code><br> <code>(integer) 3</code><br> <code>redis&gt; LPUSH greet &quot;hello&quot;</code><br> <code>(integer) 4</code><br> <code>redis&gt; LPUSH greet &quot;morning&quot;</code><br> <code>(integer) 5</code><br> <code>redis&gt; LRANGE greet 0 4 # 查看所有元素</code><br> <code>1. &quot;morning&quot;</code><br> <code>2. &quot;hello&quot;</code><br> <code>3. &quot;morning&quot;</code><br> <code>4. &quot;hello&quot;</code><br> <code>5. &quot;morning&quot;</code><br> <code>redis&gt; LREM greet 2 morning # 移除从表头到表尾，最先发现的两个 morning</code><br> <code>(integer) 2 # 两个元素被移除</code><br> <code>redis&gt; LLEN greet # 还剩 3 个元素</code><br> <code>(integer) 3</code><br> <code>redis&gt; LRANGE greet 0 2</code><br> <code>1. &quot;hello&quot;</code><br> <code>2. &quot;hello&quot;</code><br> <code>3. &quot;morning&quot;</code><br> <code>redis&gt; LREM greet -1 morning # 移除从表尾到表头，第一个 morning</code><br> <code>(integer) 1</code><br> <code>redis&gt; LLEN greet # 剩下两个元素</code><br> <code>(integer) 2</code><br> <code>redis&gt; LRANGE greet 0 1</code><br> <code>1. &quot;hello&quot;</code><br> <code>2. &quot;hello&quot;</code><br> <code>redis&gt; LREM greet 0 hello # 移除表中所有 hello</code><br> <code>(integer) 2 # 两个 hello 被移除</code><br> <code>redis&gt; LLEN greet</code><br> <code>(integer) 0</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "index",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>返回如果移除key的个数大于0表示移除成功，否则一个都没移除</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "listRemoveIndexIFEqValueDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.llen(key);返回列表 key 的长度。",
    "name": "listSize",
    "group": "listSize",
    "version": "0.1.0",
    "description": "<p>获取List的长度</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "long",
            "description": "<p>返回-1：表示该key不存在，或不是List类型的</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "listSize"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.hset(key, subKey, value);将哈希表 key 中的域 field 的值设为 value 。如果 key 不存在，一个新的哈希表被创建并进行 HSET 操作。如果域 field 已经存在于哈希表中，旧值将被覆盖。",
    "name": "mapAddDao",
    "group": "mapAddDao",
    "version": "0.1.0",
    "description": "<p>设置Map中指定field的值为新值 注：key如果存在，必须为Map类型的，如果不存在，就新添加一个key</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subKey",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>新值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>存储成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>存储失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapAddDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.hmset(key, valueMap);同时将多个 field-value (域-值)对设置到哈希表 key 中。此命令会覆盖哈希表中已存在的域。",
    "name": "mapAddMapDao",
    "group": "mapAddMapDao",
    "version": "0.1.0",
    "description": "<p>将key-values存储到Map类型的数据里，注意：此命令会覆盖哈希表中已存在的域。如果 key 不存在，一个空哈希表被创建并执行 HMSET 操作。</p> <p><code>redis&gt; HMSET website google www.google.com yahoo www.yahoo.com</code><br> <code>OK</code><br> <code>redis&gt; HGET website google</code><br> <code>&quot;www.google.com&quot;</code><br> <code>redis&gt; HGET website yahoo</code><br> <code>&quot;www.yahoo.com&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可为null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "Map",
            "optional": false,
            "field": "valueMap",
            "description": "<p>map值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>存储成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>存储失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapAddMapDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.hexists(key, subKey);查看哈希表 key 中，给定域 field 是否存在。",
    "name": "mapExistsKey",
    "group": "mapExistsKey",
    "version": "0.1.0",
    "description": "<p>查看哈希表 key 中，给定域 field 是否存在。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "subKeys",
            "description": "<p>指定域</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>该Map中存在指定的subKey</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>该Map中不存在指定的subKey</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapExistsKey"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.hkeys(key);返回哈希表 key 中的所有域。",
    "name": "mapGetAllKey",
    "group": "mapGetAllKey",
    "version": "0.1.0",
    "description": "<p>获取指定Map类型的所有key集合，只要该key是Map类型的，就会被查询出来</p> <p><code>redis&gt; HMSET website google www.google.com yahoo www.yahoo.com</code><br> <code>OK</code><br> <code>redis&gt; HKEYS website</code><br> <code>1) &quot;google&quot;</code><br> <code>2) &quot;yahoo&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Set",
            "optional": false,
            "field": "set",
            "description": "<p>Set<String></p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapGetAllKey"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.hvals(key);返回哈希表 key 中所有域的值。",
    "name": "mapGetAllValue",
    "group": "mapGetAllValue",
    "version": "0.1.0",
    "description": "<p>返回哈希表 key 中所有域的值。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "list",
            "description": "<p>List<String>获取指定Map中所有的field的value</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapGetAllValue"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.hgetAll(key);返回哈希表 key 中，所有的域和值。",
    "name": "mapGetAll",
    "group": "mapGetAll",
    "version": "0.1.0",
    "description": "<p>返回哈希表 key 中，所有的域和值。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map",
            "optional": false,
            "field": "map",
            "description": "<p>Map&lt;String, String&gt;获取指定Map中所有的域和值。</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapGetAll"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.hmget(key, subKeys);返回哈希表 key 中，一个或多个给定域的值。",
    "name": "mapGetValueByKey",
    "group": "mapGetValueByKey",
    "version": "0.1.0",
    "description": "<p>获取指定Map的指定subKey的value 1、如果key不是Map类型的: 返回null 2、如果key是Map类型的，但是subKey不存在，返回[null]</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "subKeys",
            "description": "<p>指定域</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "list",
            "description": "<p>List<String>，返回哈希表 key 中，一个或多个给定域的值。</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapGetValueByKey"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.hget(key, subKey);获取Map中指定field的value",
    "name": "mapGet",
    "group": "mapGet",
    "version": "0.1.0",
    "description": "<p>返回哈希表 key 中给定域 field 的值。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subKey",
            "description": "<p>域</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "string",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapGet"
  },
  {
    "type": "get",
    "url": "/",
    "title": "j.hincrBy(key, subKey, val);为哈希表 key 中的域 field 的值加上增量 increment 。增量也可以为负数，相当于对给定域进行减法操作。",
    "name": "mapIncr",
    "group": "mapIncr",
    "version": "0.1.0",
    "description": "<p>为哈希表 key 中的域 field 的值加上增量 increment 如果 key 不存在，一个新的哈希表被创建并执行 HINCRBY 命令。 如果域 field 不存在，那么在执行命令前，域的值被初始化为 0 。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "subKeys",
            "description": "<p>指定域</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "val",
            "description": "<p>增量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>Long哈希表 key 中域 subKeys 的值。</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapIncr"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.hdel(key, subKeys);删除哈希表 key 中的一个或多个指定域，不存在的域将被忽略。",
    "name": "mapRemoveKeyDao",
    "group": "mapRemoveKeyDao",
    "version": "0.1.0",
    "description": "<p>删除哈希表 key 中的一个或多个指定域，不存在的域将被忽略。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "subKeys",
            "description": "<p>指定域</p>"
          },
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>删除成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>删除失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapRemoveKeyDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.hlen(key);返回哈希表 key 中域的数量。",
    "name": "mapSize",
    "group": "mapSize",
    "version": "0.1.0",
    "description": "<p>返回哈希表 key 中域的数量。如果该key不存在，或不为Map类型的返回-1</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>long获取指定Map的长度，如果该key不存在，或不为Map类型，返回-1</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "mapSize"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.del(key);删除给定的一个或多个 key 。",
    "name": "removeKeysDao",
    "group": "removeKeysDao",
    "version": "0.1.0",
    "description": "<p>删除指定key，不管该key是什么类型的 注：如果key不存在，返回false</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>删除成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>不存在</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "removeKeysDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "jedis.sadd(key, values);将一个或多个 member 元素加入到集合 key 当中，已经存在于集合的 member 元素将被忽略。",
    "name": "setAddValuesDao",
    "group": "setAddValuesDao",
    "version": "0.1.0",
    "description": "<p>往指定Set集合中添加多个值</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "values",
            "description": "<p>值</p>"
          },
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>被添加到集合中的新元素的数量，不包括被忽略的元素。 1、如果为-1：表示该key已经存在，但不是Set类型，或出现异常 2、否则返回添加了多少个值的count数</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "setAddValuesDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.sdiff(keys);返回一个集合的全部成员，该集合是所有给定集合的差集",
    "name": "setDiff",
    "group": "setDiff",
    "version": "0.1.0",
    "description": "<p>返回Set集合key1在集合key2[key3...]中的差集 注： 1、如果有某个参数存在，但不是Set类型的，结果返回null 2、如果有某个参数不存在，在求差集时忽略该参数 3、该操作不修改内存数据库的数据,所以不需要事务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "set",
            "optional": false,
            "field": "set",
            "description": "<p>Set<String>新集合</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "setDiff"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.sismember(key, value);判断 member 元素是否集合 key 的成员。",
    "name": "setExistsValue",
    "group": "setExistsValue",
    "version": "0.1.0",
    "description": "<p>如果 member 元素是集合的成员，返回 1 。 如果 member 元素不是集合的成员，或 key 不存在，返回 0 。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>指定Set集合中存在指定的value</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>指定Set集合中不存在指定的value</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "setExistsValue"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.smembers(key);返回集合 key 中的所有成员。",
    "name": "setGetAllValue",
    "group": "setGetAllValue",
    "version": "0.1.0",
    "description": "<p>获取指定Set集合中所有的value 注：如果该key存在但不是Set类型的，或key不存在，返回null</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Set",
            "optional": false,
            "field": "value",
            "description": "<p>Set<String>集合中的所有成员。</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "setGetAllValue"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.sunion(keys);返回一个集合的全部成员，该集合是所有给定集合的并集。",
    "name": "setJoin",
    "group": "setJoin",
    "version": "0.1.0",
    "description": "<p>将多个Set连接在一起，返回一个连接之后的Set集合 注： 1、如果不传参，返回null 2、如果传参的第一个参数不为Set类型的，返回null 3、如果从第二个参数开始，如果有某个参数不是Set类型的，结果返回null 4、如果从第二个参数开始，有某些参数不存在，但存在的参数都是Set类型的，可以返回非null的值 5、该操作不修改内存数据库的数据,所以不需要事务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "set",
            "optional": false,
            "field": "set",
            "description": "<p>Set<String>新集合</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "setJoin"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.smove(key1, key2, vlaue);将 vlaue 元素从 key1 集合移动到 key2 集合。",
    "name": "setMoveDao",
    "group": "setMoveDao",
    "version": "0.1.0",
    "description": "<p>移动Set集合key1中的value到Set集合key2中 注： 1、key1 和 key2都必须存在，且必须为Set类型的，否则移动不成功 2、key1和key2可以相等，等效于没有移动，但是返回true</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key1",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key2",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "values",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>移动成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>移动失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "setMoveDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.srem(key, values);移除集合 key 中的一个或多个 member 元素，不存在的 member 元素会被忽略。",
    "name": "setRemoveValuesDao",
    "group": "setRemoveValuesDao",
    "version": "0.1.0",
    "description": "<p>移除Set集合中指定的value 注：如果该key不是Set类型或不存在，返回false</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "values",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>删除成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>删除失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "setRemoveValuesDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.sinter(keys);返回一个集合的全部成员，该集合是所有给定集合的交集。",
    "name": "setSinter",
    "group": "setSinter",
    "version": "0.1.0",
    "description": "<p>返回给定Set集合的交集 注： 1、如果有某个参数存在，但不是Set类型的，结果返回null 2、如果有某个参数不存在，在求交集时忽略该参数 3、该操作不修改内存数据库的数据,所以不需要事务</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "set",
            "optional": false,
            "field": "set",
            "description": "<p>Set<String>新集合</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "setSinter"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.scard(key);返回集合 key 的基数(集合中元素的数量)。",
    "name": "setSize",
    "group": "setSize",
    "version": "0.1.0",
    "description": "<p>获取指定Set集合的长度</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "value",
            "description": "<p>-1:表示指定的key不是Set类型的，</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "setSize"
  },
  {
    "type": "post",
    "url": "/",
    "title": "调用jedis.setex(key, expireSecond, value);存储String类型的key-value，并设置key的过期时间",
    "name": "stringAddAndSetExpireDao",
    "group": "stringAddAndSetExpireDao",
    "version": "0.1.0",
    "description": "<p>将值 value 关联到 key ， 并将 key 的生存时间设为 seconds (以秒为单位)。如果 key 已经存在， SETEX 命令将覆写旧值。</p> <h4>在 key 不存在时进行 SETEX</h4> <p><code>redis&gt; SETEX cache_user_id 60 10086</code><br> <code>OK</code><br> <code>redis&gt; GET cache_user_id # 值</code><br> <code>&quot;10086&quot;</code><br> <code>redis&gt; TTL cache_user_id # 剩余生存时间</code><br> <code>(integer) 49</code><br></p> <h4>key 已经存在时，SETEX 覆盖旧值</h4> <p><code>redis&gt; SET cd &quot;timeless&quot;</code><br> <code>OK</code><br> <code>redis&gt; SETEX cd 3000 &quot;goodbye my love&quot;</code><br> <code>OK</code><br> <code>redis&gt; GET cd</code><br> <code>&quot;goodbye my love&quot;</code><br> <code>redis&gt; TTL cd</code><br> <code>(integer) 2997</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可传null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "expireSecond",
            "description": "<p>过期时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>设置成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>设置失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringAddAndSetExpireDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "存储String类型的key-value",
    "name": "stringAddDaoOffset",
    "group": "stringAddDaoOffset",
    "version": "0.1.0",
    "description": "<p>jedis.setrange(key, offset, value); 用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始</p> <p><code>redis&gt; SET greeting &quot;hello world&quot;</code><br> <code>OK</code><br> <code>redis&gt; SETRANGE greeting 6 &quot;Redis&quot;</code><br> <code>(integer) 11</code><br> <code>redis&gt; GET greeting</code><br> <code>&quot;hello Redis&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可传null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "offset",
            "description": "<p>偏移量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>设置成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>设置失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringAddDaoOffset"
  },
  {
    "type": "post",
    "url": "/",
    "title": "调用jedis.set(key, value);存储String类型的key-value",
    "name": "stringAddDao",
    "group": "stringAddDao",
    "version": "0.1.0",
    "description": "<p>如果该key原来不是String类型，执行该方法将会把原来key的类型改变成为String类型</p> <h4>对不存在的键进行设置</h4> <p><code>redis 127.0.0.1:6379&gt; SET key &quot;value&quot;</code><br> <code>OK</code><br> <code>redis 127.0.0.1:6379&gt; GET key</code><br> <code>&quot;value&quot;</code><br></p> <h4>对已存在的键进行设置</h4> <p><code>redis 127.0.0.1:6379&gt; SET key &quot;new-value&quot;</code><br> <code>OK</code><br> <code>redis 127.0.0.1:6379&gt; GET key</code><br> <code>&quot;new-value&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可传null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>设置成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>设置失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringAddDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "调用jedis.setnx(key, value);将 key 的值设为 value ，当且仅当 key 不存在。",
    "name": "stringAddKeyWhenNoExistsKeyDao",
    "group": "stringAddKeyWhenNoExistsKeyDao",
    "version": "0.1.0",
    "description": "<p>必须当key不存在时，才为指定key设置新值，否则不设置</p> <p><code>redis&gt; EXISTS job # job 不存在</code><br> <code>(integer) 0</code><br> <code>redis&gt; SETNX job &quot;programmer&quot; # job 设置成功</code><br> <code>(integer) 1</code><br> <code>redis&gt; SETNX job &quot;code-farmer&quot; # 尝试覆盖 job ，失败</code><br> <code>(integer) 0</code><br> <code>redis&gt; GET job # 没有被覆盖</code><br> <code>&quot;programmer&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可传null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>设置成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>设置失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringAddKeyWhenNoExistsKeyDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "调用jedis.mset(keysvalues);添加/替换多个key-value组合，不管key存在与否，如果该key存在，且不是String类型的，那么将会被设置成String类型的",
    "name": "stringAddOrReplaceDao",
    "group": "stringAddOrReplaceDao",
    "version": "0.1.0",
    "description": "<p>同时设置一个或多个 key-value 对。 如果某个给定 key 已经存在，那么 MSET 会用新值覆盖原来的旧值，如果这不是你所希望的效果， 请考虑使用 MSETNX 命令：它只会在所有给定 key 都不存在的情况下进行设置操作。</p> <p><code>redis&gt; MSET date &quot;2012.3.30&quot; time &quot;11:00 a.m.&quot; weather &quot;sunny&quot;</code><br> <code>OK</code><br> <code>redis&gt; MGET date time weather</code><br> <code>1. &quot;2012.3.30&quot;</code><br> <code>2. &quot;11:00 a.m.&quot;</code><br> <code>3. &quot;sunny&quot;</code><br></p> <h4>MSET 覆盖旧值例子</h4> <p><code>redis&gt; SET google &quot;google.hk&quot;</code><br> <code>OK</code><br> <code>redis&gt; MSET google &quot;google.com&quot;</code><br> <code>OK</code><br> <code>redis&gt; GET google</code><br> <code>&quot;google.com&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可传null</p>"
          },
          {
            "group": "Parameter",
            "type": "Map",
            "optional": false,
            "field": "map",
            "description": "<p>Map&lt;String, String&gt;key-value组合</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>添加/替换成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>添加/替换失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringAddOrReplaceDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "调用jedis.set(key, value);存储String类型的key-value",
    "name": "stringAddSerialDao",
    "group": "stringAddSerialDao",
    "version": "0.1.0",
    "description": "<p>如果该key原来不是String类型，执行该方法将会把原来key的类型改变成为String类型</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可传null</p>"
          },
          {
            "group": "Parameter",
            "type": "byte[]",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "byte[]",
            "optional": false,
            "field": "value",
            "description": "<p>值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>设置成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>设置失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringAddSerialDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "调用jedis.msetnx(keysvalues);将 key 的值设为 value ，当且仅当 key 不存在。",
    "name": "stringAddWhenNoExistsKeyDao",
    "group": "stringAddWhenNoExistsKeyDao",
    "version": "0.1.0",
    "description": "<p>添加多个key-value组合，要添加的key必须都不存在，有一个存在，就一个也添加不进去</p> <p><code>redis&gt; EXISTS job # job 不存在</code><br> <code>(integer) 0</code><br> <code>redis&gt; SETNX job &quot;programmer&quot; # job 设置成功</code><br> <code>(integer) 1</code><br> <code>redis&gt; SETNX job &quot;code-farmer&quot; # 尝试覆盖 job ，失败</code><br> <code>(integer) 0</code><br> <code>redis&gt; GET job # 没有被覆盖</code><br> <code>&quot;programmer&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可传null</p>"
          },
          {
            "group": "Parameter",
            "type": "Map",
            "optional": false,
            "field": "map",
            "description": "<p>Map&lt;String, String&gt; key-value组合</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>添加/替换成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>添加/替换失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringAddWhenNoExistsKeyDao"
  },
  {
    "type": "post",
    "url": "/",
    "title": "调用jedis.append(key, value);如果 key 已经存在并且是一个字符串， APPEND 命令将 value 追加到 key 原来的值的末尾。",
    "name": "stringAppendDao",
    "group": "stringAppendDao",
    "version": "0.1.0",
    "description": "<p>添加value到指定key的值得末尾，该key必须存在，且必须为String类型</p> <h4>对不存在的 key 执行 APPEND</h4> <p><code>redis&gt; EXISTS myphone # 确保 myphone 不存在</code><br> <code>(integer) 0</code><br> <code>redis&gt; APPEND myphone &quot;nokia&quot; # 对不存在的 key 进行 APPEND ，等同于 SET myphone &quot;nokia&quot;</code><br> <code>(integer) 5 # 字符长度</code><br></p> <h4>对已存在的字符串进行 APPEND</h4> <p><code>redis&gt; APPEND myphone &quot; - 1110&quot; # 长度从 5 个字符增加到 12 个字符</code><br> <code>(integer) 12</code><br> <code>redis&gt; GET myphone</code><br> <code>&quot;nokia - 1110&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可传null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>添加的值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>添加成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>添加失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringAppendDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "调用 jedis.get(key);获取String类型的key",
    "name": "stringGetArray",
    "group": "stringGetArray",
    "version": "0.1.0",
    "description": "<p>返回 key 所关联的字符串值。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "byte[]",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "byte[]",
            "optional": false,
            "field": "value",
            "description": "<p>返回 key 所关联的字符串值。 如果 key 不存在那么返回特殊值 nil 。</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringGetArray"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.mget(keys);获取String类型的key",
    "name": "stringGetList",
    "group": "stringGetList",
    "version": "0.1.0",
    "description": "<p>调用 jedis.mget(keys);返回所有(一个或多个)给定 key 的值。 如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil 。因此，该命令永不失败。</p> <p><code>redis&gt; MGET redis mongodb mysql # 不存在的 mysql 返回 nil</code><br> <code>1. &quot;redis.com&quot;</code><br> <code>2. &quot;mongodb.org&quot;</code><br> <code>3. (nil)</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "value",
            "description": "<p>List<String>返回一个包含所有给定 key 的值的列表。该list里可能会出现null,即表示该key不存在，或不是String类型</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringGetList"
  },
  {
    "type": "get",
    "url": "/",
    "title": "调用jedis.getSet(key, value);给定 key 的值设为 value ，并返回 key 的旧值(old value)。",
    "name": "stringGetSetDao",
    "group": "stringGetSetDao",
    "version": "0.1.0",
    "description": "<p>替换key的值为新value，必须该key存在 注意：如果该key原来不是String类型，执行该方法将会把原来key的类型改变成为String类型 给定 key 的值设为 value ，并返回 key 的旧值(old value)。</p> <p><code>redis&gt; GETSET db mongodb # 没有旧值，返回 nil</code><br> <code>(nil)</code><br> <code>redis&gt; GET db</code><br> <code>&quot;mongodb&quot;</code><br> <code>redis&gt; GETSET db redis # 返回旧值 mongodb</code><br> <code>&quot;mongodb&quot;</code><br> <code>redis&gt; GET db</code><br> <code>&quot;redis&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务 可传null</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>新值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>返回设置之前的旧值, 如果返回null表示key不存在</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringGetSetDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "调用 jedis.getrange(key, startOff, endOff);获取String类型的key 中字符串值的子字符串",
    "name": "stringGetSubString",
    "group": "stringGetSubString",
    "version": "0.1.0",
    "description": "<p>返回 key 中字符串值的子字符串，字符串的截取范围由 start 和 end 两个偏移量决定(包括 start 和 end 在内)。 负数偏移量表示从字符串最后开始计数， -1 表示最后一个字符， -2 表示倒数第二个，以此类推</p> <p><code>redis&gt; SET greeting &quot;hello, my friend&quot;</code><br> <code>OK</code><br> <code>redis&gt; GETRANGE greeting 0 4 # 返回索引0-4的字符，包括4。</code><br> <code>&quot;hello&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "startOff",
            "description": "<p>start偏移量</p>"
          },
          {
            "group": "Parameter",
            "type": "long",
            "optional": false,
            "field": "endOff",
            "description": "<p>end偏移量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>截取得出的子字符串。</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringGetSubString"
  },
  {
    "type": "get",
    "url": "/",
    "title": "调用 jedis.get(key);获取String类型的key",
    "name": "stringGet",
    "group": "stringGet",
    "version": "0.1.0",
    "description": "<p>返回 key 所关联的字符串值。</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>返回 key 所关联的字符串值。 如果 key 不存在那么返回特殊值 nil 。</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringGet"
  },
  {
    "type": "post",
    "url": "/",
    "title": "调用jedis.strlen(key);返回 key 所储存的字符串值的长度。",
    "name": "stringLen",
    "group": "stringLen",
    "version": "0.1.0",
    "description": "<p>获取String类型key的值得长度,不存在的 key 长度为 0</p> <p><code>redis&gt; SET mykey &quot;Hello world&quot;</code><br> <code>OK</code><br> <code>redis&gt; STRLEN mykey</code><br> <code>(integer) 11</code><br> <code>redis&gt; STRLEN nonexisting</code><br> <code>(integer) 0</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "long",
            "description": "<p>如果该key不是String类型的，或者该key不存在，都返回 -1</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringLen"
  },
  {
    "type": "post",
    "url": "/",
    "title": "调用jedis.incr(key);将 key 中储存的数字值增一。如果 key 不存在，那么 key 的值会先被初始化为 0 ，然后再执行 INCR 操作。",
    "name": "stringSequence",
    "group": "stringSequence",
    "version": "0.1.0",
    "description": "<p>jedis.incr(key) 获取String类型key自增一后的值，如果该key不是String类型的，或者该key不存在，都返回 -1</p> <p><code>redis&gt; SET page_view 20</code><br> <code>OK</code><br> <code>redis&gt; INCR page_view</code><br> <code>(integer) 21</code><br> <code>redis&gt; GET page_view # 数字值在 Redis 中以字符串的形式保存</code><br> <code>&quot;21&quot;</code><br></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>long执行 INCR 命令之后 key 的值。</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "stringSequence"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.type(key);返回 key 所储存的值的类型。",
    "name": "type",
    "group": "type",
    "version": "0.1.0",
    "description": "<p>获取key的类型</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>none (key不存在) string (字符串) list (列表) set (集合) zset (有序集) hash (哈希表)</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "type"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zadd(key, scoreMembers);将一个或多个 member 元素及其 score 值加入到有序集 key 当中。",
    "name": "zsetAddDao",
    "group": "zsetAddDao",
    "version": "0.1.0",
    "description": "<p>排序规则：按照分数（scope）升序排序，如果分数（scope）相同，按照分数对应的value(值)的字典顺序排序 向LinkedHashSet集合添加元素 注： 1、如果key存在，必须为zset类型的 2、如果value在集合中存在，将返回false 3、scoreMembers 这个Map中如果有某个值在集合中存在，该条数据将不能被添加进去，其他如果被添加进去了，最终返回的结果还是true</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "Map",
            "optional": false,
            "field": "scoreMembers",
            "description": "<p>Map&lt;String, Double&gt;值-分数对</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>添加成功</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "false",
            "description": "<p>添加失败</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetAddDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zcount(key, scoreStart, scoreEnd);返回有序集 key 中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量。",
    "name": "zsetCount",
    "group": "zsetCount",
    "version": "0.1.0",
    "description": "<p>获取LinkedHashSet集合中指定区间分数的个数</p> <p>注： 1、key必须为zset类型的 2、-1：表示异常或key不存在，或key存在，或key存在，但不是zset类型的</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "scoreStart",
            "description": "<p>起始分数</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "scoreEnd",
            "description": "<p>终止分数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>LinkedHashSet集合中指定区间分数的个数</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetCount"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zrange(key, start, end);返回有序集 key 中，指定区间内的成员。\t其中成员的位置按 score 值递增(从小到大)来排序。",
    "name": "zsetDescOrder",
    "group": "zsetDescOrder",
    "version": "0.1.0",
    "description": "<p>获取LinkedHashSet集合指定区间降序（从大到小）排序,如果分数相同，在按照字典顺序排序（而不是从大到小排序哦！）的子集合</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "start",
            "description": "<p>起始索引</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "end",
            "description": "<p>终止索引</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Set",
            "optional": false,
            "field": "set",
            "description": "<p>Set<String> 指定索引下的子集合（按score排序）</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetDescOrder"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zrangeByLex(key, demoMin, demoMax);获取LinkedHashSet集合字典区间(即：获取“a” ~ \"k\" 字典区间的子集合数)有序集合的成员",
    "name": "zsetDic",
    "group": "zsetDic",
    "version": "0.1.0",
    "description": "<p>获取LinkedHashSet集合字典区间(即：获取“a” ~ &quot;k&quot; 字典区间的子集合数)有序集合的成员 注：key必须是zset类型的，且min和max不能为null</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "min",
            "description": "<p>起始索引</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "max",
            "description": "<p>终止索引</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Set",
            "optional": false,
            "field": "set",
            "description": "<p>Set<String> 子集合</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetDic"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zrank(key, value);返回有序集 key 中成员 member 的排名。其中有序集成员按 score 值递增(从小到大)顺序排列。",
    "name": "zsetGetIndexByValue",
    "group": "zsetGetIndexByValue",
    "version": "0.1.0",
    "description": "<p>获取LinkedHashSet集合指定成员（value）值的索引 注： 1、key必须是zset类型的 2、value必须存在</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>元素</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "index",
            "description": "<p>long 集合指定成员（value）值的索引</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetGetIndexByValue"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zrevrank(key, value);返回有序集 key 中成员 member 的排名。其中有序集成员按 score 值递减(从大到小)排序。",
    "name": "zsetGetRankNumByValue",
    "group": "zsetGetRankNumByValue",
    "version": "0.1.0",
    "description": "<p>获取LinkedHashSet集合指定值(value)的排名数，排名最大的排名数为0  （即获取出来的值表示在集合中第几大） 也就是说：分数值越大的value，排名值越小</p> <p>注： 1、key必须为zset 2、value必须在zset中存在 3、-1：表示key是zset类型的，或value不存在，或出现异常</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>元素</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "true",
            "description": "<p>long 排名（从0开始）</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetGetRankNumByValue"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zscore(key, value);返回有序集 key 中，成员 member 的 score 值。",
    "name": "zsetGetScoreNumByValue",
    "group": "zsetGetScoreNumByValue",
    "version": "0.1.0",
    "description": "<p>获取LinkedHashSet集合指定成员value的分数 注： 1、如果key不是zset类型的、或存在，返回null 2、如果value在集合中不存在，返回null</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>元素</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "true",
            "description": "<p>Double 分数</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetGetScoreNumByValue"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zrem(key, values);移除有序集 key 中的一个或多个成员，不存在的成员将被忽略。",
    "name": "zsetRemoveByValueDao",
    "group": "zsetRemoveByValueDao",
    "version": "0.1.0",
    "description": "<p>移除LinkedHashSet集合指定成员value(即通过value删除集合中的成员) 注： 1、key必须是zset类型的 2、values中只要有一个被移除了，都将返回true</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "String...",
            "optional": false,
            "field": "values",
            "description": "<p>多个元素</p>"
          },
          {
            "group": "Parameter",
            "type": "Transaction",
            "optional": false,
            "field": "tx",
            "description": "<p>事务</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "true",
            "description": "<p>移除成功</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetRemoveByValueDao"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zrangeByScore(key, min, max);返回有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员。有序集成员按 score 值递增(从小到大)次序排列。具有相同 score 值的成员按字典序(lexicographical order)来排列",
    "name": "zsetScore",
    "group": "zsetScore",
    "version": "0.1.0",
    "description": "<p>获取LinkedHashSet集合分数区间有序集合的成员 注： 1、key必须为zset类型 2、min必须小等于max</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "min",
            "description": "<p>起始分数</p>"
          },
          {
            "group": "Parameter",
            "type": "double",
            "optional": false,
            "field": "max",
            "description": "<p>终止分数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Set",
            "optional": false,
            "field": "set",
            "description": "<p>Set<String> 指定分数下的子集合（按score排序）</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetScore"
  },
  {
    "type": "get",
    "url": "/",
    "title": "jedis.zcard(key);返回有序集 key 的基数。",
    "name": "zsetSize",
    "group": "zsetSize",
    "version": "0.1.0",
    "description": "<p>获取LinkedHashSet集合长度 -1:表示该key存在，但不是zset类型的；或出现异常</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>键</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "size",
            "description": "<p>LinkedHashSet集合长度</p>"
          }
        ]
      }
    },
    "filename": "./BaseDao2.java",
    "groupTitle": "zsetSize"
  }
] });
