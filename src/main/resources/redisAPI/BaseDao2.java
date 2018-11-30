package com.dream.common.redis.dao;

import org.apache.log4j.Logger;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.Transaction;

import java.util.List;
import java.util.Map;
import java.util.Set;

public class BaseDao2 extends AdpatRedis {
	private final static Logger logger = Logger.getLogger(BaseDao2.class);
	protected IDBRedisPool pool = null;

	public BaseDao2() {
	}

	public BaseDao2(IDBRedisPool pool) {
		super(pool);
		this.pool = pool;
	}

	public void setDBPool(IDBRedisPool pool) {
		this.pool = pool;
	}

	public IDBRedisPool getDBPool() {
		return this.pool;
	}
	
// ------------------------------String类型接口----------------------------------------------------------------

	/**
	 *
	 * @api {post} / 调用jedis.set(key, value);存储String类型的key-value
	 * @apiName stringAddDao
	 * @apiGroup stringAddDao
	 * @apiVersion 0.1.0
	 * @apiDescription 如果该key原来不是String类型，执行该方法将会把原来key的类型改变成为String类型
	 * #### 对不存在的键进行设置 ####
	 * `redis 127.0.0.1:6379> SET key "value"`<br>
	 * `OK`<br>
	 * `redis 127.0.0.1:6379> GET key`<br>
	 * `"value"`<br>
	 * #### 对已存在的键进行设置 ####
	 * `redis 127.0.0.1:6379> SET key "new-value"`<br>
	 * `OK`<br>
	 * `redis 127.0.0.1:6379> GET key`<br>
	 * `"new-value"`<br>
	 * @apiParam {Transaction} tx  事务 可传null
	 * @apiParam {String} key  键
	 * @apiParam {String} value  值
	 * @apiSuccess {boolean} true 设置成功
	 * @apiSuccess {boolean} false 设置失败
	 *
	 */
	protected boolean stringAddDao(final Transaction tx,final String key, final String value) throws Exception {
		
		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.set(key, value);
                    return true;
                }else {
                    String statusCode = jedis.set(key, value);
                    return "OK".equals(statusCode);
                }
            });
		} catch (Throwable e) {
			throw new Exception("error stringAdd :" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {post} / 调用jedis.setex(key, expireSecond, value);存储String类型的key-value，并设置key的过期时间
	 * @apiName stringAddAndSetExpireDao
	 * @apiGroup stringAddAndSetExpireDao
	 * @apiVersion 0.1.0
	 * @apiDescription 将值 value 关联到 key ，
	 * 并将 key 的生存时间设为 seconds (以秒为单位)。如果 key 已经存在， SETEX 命令将覆写旧值。
	 *
	 * #### 在 key 不存在时进行 SETEX
	 * `redis> SETEX cache_user_id 60 10086`<br>
	 * `OK`<br>
	 * `redis> GET cache_user_id  # 值`<br>
	 * `"10086"`<br>
	 * `redis> TTL cache_user_id  # 剩余生存时间`<br>
	 * `(integer) 49`<br>
	 *
	 * #### key 已经存在时，SETEX 覆盖旧值
	 * `redis> SET cd "timeless"`<br>
	 * `OK`<br>
	 * `redis> SETEX cd 3000 "goodbye my love"`<br>
	 * `OK`<br>
	 * `redis> GET cd`<br>
	 * `"goodbye my love"`<br>
	 * `redis> TTL cd`<br>
	 * `(integer) 2997`<br>
	 * @apiParam {Transaction} tx  事务 可传null
	 * @apiParam {String} key  键
	 * @apiParam {String} value  值
	 * @apiParam {int} expireSecond  过期时间
	 * @apiSuccess {boolean} true 设置成功
	 * @apiSuccess {boolean} false 设置失败
	 *
	 */
	protected boolean stringAddAndSetExpireDao(final Transaction tx,final String key, final String value, final int expireSecond) throws Exception {
		
		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.setex(key, expireSecond, value);
                    return true;
                }else {
                    String statusCode = jedis.setex(key, expireSecond, value);
                    return "OK".equals(statusCode);
                }
            });
		} catch (Throwable e) {
			throw new Exception("error stringAdd :" + e.getMessage(), e);
		}
	}

	/**
	 *
	 * @api {post} / 调用jedis.set(key, value);存储String类型的key-value
	 * @apiName stringAddSerialDao
	 * @apiGroup stringAddSerialDao
	 * @apiVersion 0.1.0
	 * @apiDescription 如果该key原来不是String类型，执行该方法将会把原来key的类型改变成为String类型
	 * @apiParam {Transaction} tx  事务 可传null
	 * @apiParam {byte[]} key  键
	 * @apiParam {byte[]} value  值
	 * @apiSuccess {boolean} true 设置成功
	 * @apiSuccess {boolean} false 设置失败
	 *
	 */
	protected boolean stringAddSerialDao(final Transaction tx,final byte[] key, final byte[] value) throws Exception {
		
		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.set(key, value);
                    return true;
                }else {
                    String statusCode = jedis.set(key, value);
                    return "OK".equals(statusCode);
                }
            });
		} catch (Throwable e) {
			throw new Exception("error stringAddSerial:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {post} / 存储String类型的key-value
	 * @apiName stringAddDaoOffset
	 * @apiGroup stringAddDaoOffset
	 * @apiVersion 0.1.0
	 * @apiDescription jedis.setrange(key, offset, value);
	 * 用 value 参数覆写给定 key 所储存的字符串值，从偏移量 offset 开始
	 *
	 * `redis> SET greeting "hello world"`<br>
	 * `OK`<br>
	 * `redis> SETRANGE greeting 6 "Redis"`<br>
	 * `(integer) 11`<br>
	 * `redis> GET greeting`<br>
	 * `"hello Redis"`<br>
	 * @apiParam {Transaction} tx  事务 可传null
	 * @apiParam {String} key  键
	 * @apiParam {String} key  键
	 * @apiParam {long} offset  偏移量
	 * @apiSuccess {boolean} true 设置成功
	 * @apiSuccess {boolean} false 设置失败
	 *
	 */
	protected boolean stringAddDao(final Transaction tx,final String key,final long offset, final String value) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.setrange(key, offset, value);
                    return true;
                }
                return jedis.setrange(key, offset, value) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error stringAdd:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {get} / 调用 jedis.get(key);获取String类型的key
	 * @apiName stringGet
	 * @apiGroup stringGet
	 * @apiVersion 0.1.0
	 * @apiDescription 返回 key 所关联的字符串值。
	 * @apiParam {String} key  键
	 * @apiSuccess {String} value 返回 key 所关联的字符串值。
	 * 如果 key 不存在那么返回特殊值 nil 。
	 *
	 */
	protected String stringGet(final String key) {

		try {
			return this.execute(null, jedis -> jedis.get(key));
		} catch (Exception e) {
			logger.error("error stringGet:" + e.getMessage());
		}

		return null;
	}

	/**
	 *
	 * @api {get} / 调用 jedis.get(key);获取String类型的key
	 * @apiName stringGetArray
	 * @apiGroup stringGetArray
	 * @apiVersion 0.1.0
	 * @apiDescription 返回 key 所关联的字符串值。
	 * @apiParam {byte[]} key  键
	 * @apiSuccess {byte[]} value 返回 key 所关联的字符串值。
	 * 如果 key 不存在那么返回特殊值 nil 。
	 *
	 */
	protected byte[] stringGet(final byte[] key) {

		try {
			return this.execute(null, jedis -> jedis.get(key));
		} catch (Exception e) {
			logger.error("error stringGet:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.mget(keys);获取String类型的key
	 * @apiName stringGetList
	 * @apiGroup stringGetList
	 * @apiVersion 0.1.0
	 * @apiDescription 调用 jedis.mget(keys);返回所有(一个或多个)给定 key 的值。
	 * 如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil 。因此，该命令永不失败。
	 *
	 * `redis> MGET redis mongodb mysql     # 不存在的 mysql 返回 nil`<br>
	 * `1. "redis.com"`<br>
	 * `2.  "mongodb.org"`<br>
	 * `3.  (nil)`<br>
	 * @apiParam {String...} key  键
	 * @apiSuccess {List} value  List<String>返回一个包含所有给定 key 的值的列表。该list里可能会出现null,即表示该key不存在，或不是String类型
	 *
	 */
	protected List<String> stringGet(final String... keys) {

		try {
			return this.execute(null, jedis -> jedis.mget(keys));
		} catch (Exception e) {
			logger.error("error stringGet :" + e.getMessage());
		}

		return null;
	}

	/**
	 *
	 * @api {get} / 调用 jedis.getrange(key, startOff, endOff);获取String类型的key 中字符串值的子字符串
	 * @apiName stringGetSubString
	 * @apiGroup stringGetSubString
	 * @apiVersion 0.1.0
	 * @apiDescription
	 * 返回 key 中字符串值的子字符串，字符串的截取范围由 start 和 end 两个偏移量决定(包括 start 和 end 在内)。
	 * 负数偏移量表示从字符串最后开始计数， -1 表示最后一个字符， -2 表示倒数第二个，以此类推
	 *
	 * `redis> SET greeting "hello, my friend"`<br>
	 * `OK`<br>
	 * `redis> GETRANGE greeting 0 4          # 返回索引0-4的字符，包括4。`<br>
	 * `"hello"`<br>
	 * @apiParam {String} key  键
	 * @apiParam {long} startOff  start偏移量
	 * @apiParam {long} endOff  end偏移量
	 * @apiSuccess {String} value 截取得出的子字符串。
	 *
	 */
	protected String stringGetSubString(final String key, final long startOff, final long endOff) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "string")) {
                    return jedis.getrange(key, startOff, endOff);
                }
                return null;
            });
		} catch (Exception e) {
			logger.error("error stringGetSubString :" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / 调用jedis.getSet(key, value);给定 key 的值设为 value ，并返回 key 的旧值(old value)。
	 * @apiName stringGetSetDao
	 * @apiGroup stringGetSetDao
	 * @apiVersion 0.1.0
	 * @apiDescription
	 * 替换key的值为新value，必须该key存在
	 * 注意：如果该key原来不是String类型，执行该方法将会把原来key的类型改变成为String类型
	 * 给定 key 的值设为 value ，并返回 key 的旧值(old value)。
	 *
	 * `redis> GETSET db mongodb    # 没有旧值，返回 nil`<br>
	 * `(nil)`<br>
	 * `redis> GET db`<br>
	 * `"mongodb"`<br>
	 * `redis> GETSET db redis      # 返回旧值 mongodb`<br>
	 * `"mongodb"`<br>
	 * `redis> GET db`<br>
	 * `"redis"`<br>
	 * @apiParam {Transaction} tx  事务 可传null
	 * @apiParam {String} key  键
	 * @apiParam {String} value  新值
	 * @apiSuccess {String} value 返回设置之前的旧值, 如果返回null表示key不存在
	 *
	 */

	protected String stringGetSetDao(final Transaction tx,final String key, final String value) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.getSet(key, value);
                    return null;
                }
                return jedis.getSet(key, value);
            });
		} catch (Throwable e) {
			throw new Exception("error stringGetSet:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {post} / 调用jedis.setnx(key, value);将 key 的值设为 value ，当且仅当 key 不存在。
	 * @apiName stringAddKeyWhenNoExistsKeyDao
	 * @apiGroup stringAddKeyWhenNoExistsKeyDao
	 * @apiVersion 0.1.0
	 * @apiDescription
	 *  必须当key不存在时，才为指定key设置新值，否则不设置
	 *
	 *  `redis> EXISTS job                # job 不存在`<br>
	 *  `(integer) 0`<br>
	 *  `redis> SETNX job "programmer"    # job 设置成功`<br>
	 * `(integer) 1`<br>
	 * `redis> SETNX job "code-farmer"   # 尝试覆盖 job ，失败`<br>
	 * `(integer) 0`<br>
	 *  `redis> GET job                   # 没有被覆盖`<br>
	 * `"programmer"`<br>
	 * @apiParam {Transaction} tx  事务 可传null
	 * @apiParam {String} key  键
	 * @apiParam {String} value  值
	 * @apiSuccess {boolean} true 设置成功
	 * @apiSuccess {boolean} false 设置失败
	 *
	 */
	protected boolean stringAddKeyWhenNoExistsKeyDao(final Transaction tx,final String key, final String value) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.setnx(key, value);
                    return true;
                }
                return jedis.setnx(key, value) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error stringAddKeyWhenNoExistsKey:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {post} / 调用jedis.strlen(key);返回 key 所储存的字符串值的长度。
	 * @apiName stringLen
	 * @apiGroup stringLen
	 * @apiVersion 0.1.0
	 * @apiDescription
	 *  获取String类型key的值得长度,不存在的 key 长度为 0
	 *
	 *  `redis> SET mykey "Hello world"`<br>
	 * `OK`<br>
	 *  `redis> STRLEN mykey`<br>
	 *  `(integer) 11`<br>
	 * `redis> STRLEN nonexisting`<br>
	 *  `(integer) 0`<br>
	 * @apiParam {String} key  键
	 * @apiSuccess {Number} long如果该key不是String类型的，或者该key不存在，都返回 -1
	 *
	 */

	protected long stringLen(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "string")) {
                    return jedis.strlen(key);
                }
                return -1L;
            });
		} catch (Exception e) {
			logger.error("error stringLen:" + e.getMessage());
		}

		return -1L;
	}
	/**
	 *
	 * @api {post} / 调用jedis.mset(keysvalues);添加/替换多个key-value组合，不管key存在与否，如果该key存在，且不是String类型的，那么将会被设置成String类型的
	 * @apiName stringAddOrReplaceDao
	 * @apiGroup stringAddOrReplaceDao
	 * @apiVersion 0.1.0
	 * @apiDescription
	 * 同时设置一个或多个 key-value 对。
	 * 如果某个给定 key 已经存在，那么 MSET 会用新值覆盖原来的旧值，如果这不是你所希望的效果，
	 * 请考虑使用 MSETNX 命令：它只会在所有给定 key 都不存在的情况下进行设置操作。
	 *
	 * `redis> MSET date "2012.3.30" time "11:00 a.m." weather "sunny"`<br>
	 * `OK`<br>
	 * `redis> MGET date time weather`<br>
	 * `1. "2012.3.30"`<br>
	 * `2. "11:00 a.m."`<br>
	 * `3. "sunny"`<br>
	 * #### MSET 覆盖旧值例子 ####
	 * `redis> SET google "google.hk"`<br>
	 * `OK`<br>
	 * `redis> MSET google "google.com"`<br>
	 * `OK`<br>
	 * 	`redis> GET google`<br>
	 * 	`"google.com"`<br>
	 * @apiParam {Transaction} tx  事务 可传null
	 * @apiParam {Map} map  Map<String, String>key-value组合
	 * @apiParam {String} value  值
	 * @apiSuccess {boolean} true 添加/替换成功
	 * @apiSuccess {boolean} false 添加/替换失败
	 *
	 */
	protected boolean stringAddOrReplaceDao(final Transaction tx,Map<String, String> map) throws Exception {

		final String[] keysvalues = caseMapToArray(map);
		
		if (keysvalues != null) {
			try {
				return this.execute(tx, jedis -> {
                    if (tx != null) {
                        tx.mset(keysvalues);
                        return true;
                    }
                    return "OK".equals(jedis.mset(keysvalues));
                });
			} catch (Throwable e) {
				throw new Exception("error stringAddOrReplace:" + e.getMessage(), e);
			}
		}

		return false;
	}
	/**
	 *
	 * @api {post} / 调用jedis.msetnx(keysvalues);将 key 的值设为 value ，当且仅当 key 不存在。
	 * @apiName stringAddWhenNoExistsKeyDao
	 * @apiGroup stringAddWhenNoExistsKeyDao
	 * @apiVersion 0.1.0
	 * @apiDescription
	 * 添加多个key-value组合，要添加的key必须都不存在，有一个存在，就一个也添加不进去
	 *
	 * `redis> EXISTS job                # job 不存在`<br>
	 * `(integer) 0`<br>
	 * `redis> SETNX job "programmer"    # job 设置成功`<br>
	 * `(integer) 1`<br>
	 * `redis> SETNX job "code-farmer"   # 尝试覆盖 job ，失败`<br>
	 * `(integer) 0`<br>
	 * `redis> GET job                   # 没有被覆盖`<br>
	 * `"programmer"`<br>
	 * @apiParam {Transaction} tx  事务 可传null
	 * @apiParam {Map} map  Map<String, String> key-value组合
	 * @apiSuccess {boolean} true 添加/替换成功
	 * @apiSuccess {boolean} false 添加/替换失败
	 *
	 */
	protected boolean stringAddWhenNoExistsKeyDao(final Transaction tx,Map<String, String> map) throws Exception {
		
		final String[] keysvalues = caseMapToArray(map);
		if (keysvalues != null) {
			try {
				return this.execute(tx, jedis -> {
                    if (tx != null) {
                        tx.msetnx(keysvalues);
                        return true;
                    }
                    return jedis.msetnx(keysvalues) > 0;
                });
			} catch (Throwable e) {
				throw new Exception("error stringAddWhenNoExistsKey:" + e.getMessage(), e);
			}
		}
		return false;
	}
	/**
	 *
	 * @api {post} / 调用jedis.append(key, value);如果 key 已经存在并且是一个字符串， APPEND 命令将 value 追加到 key 原来的值的末尾。
	 * @apiName stringAppendDao
	 * @apiGroup stringAppendDao
	 * @apiVersion 0.1.0
	 * @apiDescription 添加value到指定key的值得末尾，该key必须存在，且必须为String类型
	 *
	 * #### 对不存在的 key 执行 APPEND ####
	 *
	 * `redis> EXISTS myphone               # 确保 myphone 不存在`<br>
	 * `(integer) 0`<br>
	 * `redis> APPEND myphone "nokia"       # 对不存在的 key 进行 APPEND ，等同于 SET myphone "nokia"`<br>
	 * `(integer) 5                         # 字符长度`<br>
	 *
	 * #### 对已存在的字符串进行 APPEND ####
	 *
	 * `redis> APPEND myphone " - 1110"     # 长度从 5 个字符增加到 12 个字符`<br>
	 * `(integer) 12`<br>
	 * `redis> GET myphone`<br>
	 * `"nokia - 1110"`<br>
	 * @apiParam {Transaction} tx  事务 可传null
	 * @apiParam {String} key  键
	 * @apiParam {String} value  添加的值
	 * @apiSuccess {boolean} true 添加成功
	 * @apiSuccess {boolean} false 添加失败
	 *
	 */
	protected boolean stringAppendDao(final Transaction tx,final String key, final String value) throws Exception {

		try {
			return this.execute(tx, jedis -> {

                if (isType(jedis, key, "string")) {
                    if (tx != null) {
                        tx.append(key, value);
                        return true;
                    }
                    return jedis.append(key, value) > 0;
                }

                return false;
            });
		} catch (Throwable e) {
			throw new Exception("error stringAppend:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {post} / 调用jedis.incr(key);将 key 中储存的数字值增一。如果 key 不存在，那么 key 的值会先被初始化为 0 ，然后再执行 INCR 操作。
	 * @apiName stringSequence
	 * @apiGroup stringSequence
	 * @apiVersion 0.1.0
	 * @apiDescription jedis.incr(key)
	 *	获取String类型key自增一后的值，如果该key不是String类型的，或者该key不存在，都返回 -1
	 *
	 * `redis> SET page_view 20`<br>
	 * `OK`<br>
	 * `redis> INCR page_view`<br>
	 * `(integer) 21`<br>
	 * `redis> GET page_view    # 数字值在 Redis 中以字符串的形式保存`<br>
	 * `"21"`<br>
	 * @apiParam {String} key  键
	 * @apiSuccess {Number} number long执行 INCR 命令之后 key 的值。
	 *
	 */
	protected long stringSequence(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "string")) {
                    return jedis.incr(key);
                }
                return -1L;
            });
		} catch (Exception e) {
			logger.error("error stringLen:" + e.getMessage());
		}

		return -1L;
	}
	
	
// ------------------------------List类型接口----------------------------------------------------------------	
	/**
	 *
	 * @api {post} / jedis.lpush(key, value);将一个或多个值 value 插入到列表 key 的表头
	 * @apiName listAddToHeaderDao
	 * @apiGroup listAddToHeaderDao
	 * @apiVersion 0.1.0
	 * @apiDescription
	 *	如果有多个 value 值，那么各个 value 值按从左到右的顺序依次插入到表头： 比如说，对空列表 mylist 执行命令 LPUSH mylist a b c ，列表的值将是 c b a
	 *  将key-values往List头部添加， 该kye必须为List类型，或该key存在
	 *  @apiParam {Transaction} tx  事务 可为null
	 * @apiParam {String} key  键
	 * @apiParam {String...} value  值
	 * @apiSuccess {Number} number long执行 LPUSH 命令后，返回列表的长度。（添加到list的索引，如果添加失败就返回-1？）
	 *
	 */
	protected long listAddToHeaderDao(final Transaction tx,final String key, final String... value) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.lpush(key, value);
                    return 0L;
                }
                return jedis.lpush(key, value);
            });
		} catch (Throwable e) {
			throw new Exception("error listAddToHeader:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {post} / jedis.rpush(key, value);将一个或多个值 value 插入到列表 key 的尾部
	 * @apiName listAddToFooterDao
	 * @apiGroup listAddToFooterDao
	 * @apiVersion 0.1.0
	 * @apiDescription
	 *	如果有多个 value 值，那么各个 value 值按从左到右的顺序依次插入到表尾：比如对一个空列表 mylist 执行 RPUSH mylist a b c ，得出的结果列表为 a b c
	 *  将key-values往List尾部添加，  该kye必须为List类型，或该key存在
	 *  @apiParam {Transaction} tx  事务 可为null
	 * @apiParam {String} key  键
	 * @apiParam {String...} value  值
	 * @apiSuccess {Number} number long执行 LPUSH 命令后，返回列表的长度。（添加到list的索引，如果添加失败就返回-1？）
	 *
	 */
	protected long listAddToFooterDao(final Transaction tx,final String key, final String... value) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.rpush(key, value);
                    return 0L;
                }
                return jedis.rpush(key, value);
            });
		} catch (Throwable e) {
			throw new Exception("error listAddToFooter:" + e.getMessage(), e);
		}
	}

	/**
	 *
	 * @api {post} / jedis.lset(key, index, value);将列表 key 下标为 index 的元素的值设置为 value 。
	 * @apiName listAddToFooterDao
	 * @apiGroup listAddToFooterDao
	 * @apiVersion 0.1.0
	 * @apiDescription 设置指定索引的值，该key必须存在且为List类型的
	 * @apiParam {Transaction} tx  事务 可为null
	 * @apiParam {String} key  键
	 * @apiParam {int} index  索引
	 * @apiParam {String} value  值
	 * @apiSuccess {boolean} true 存储成功
	 *@apiSuccess {boolean} false 存储失败
	 *
	 */
	protected boolean listAddIndexValueDao(final Transaction tx,final String key, final int index, final String value) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.lset(key, index, value);
                    return true;
                }
                return "OK".equals(jedis.lset(key, index, value));
            });
		} catch (Throwable e) {
			throw new Exception("error listAddIndexValue:" + e.getMessage(), e);
		}
	}

	/**
	 *
	 * @api {post} / jedis.lindex(key, index);返回列表 key 中，下标为 index 的元素。
	 * @apiName listGetByIndex
	 * @apiGroup listGetByIndex
	 * @apiVersion 0.1.0
	 * @apiDescription 获取List指定索引的值，如果该key存在，或不是List的就返回null
	 * @apiParam {String} key  键
	 * @apiParam {int} index  索引
	 * @apiSuccess {String} string 返回指定索引的值
	 *
	 */
	protected String listGetByIndex(final String key, final int index) {

		try {
			return this.execute(null, jedis -> jedis.lindex(key, index));
		} catch (Exception e) {
			logger.error("error listGetByIndex:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {post} / jedis.llen(key);返回列表 key 的长度。
	 * @apiName listSize
	 * @apiGroup listSize
	 * @apiVersion 0.1.0
	 * @apiDescription 获取List的长度
	 * @apiParam {String} key  键
	 * @apiSuccess {number} long返回-1：表示该key不存在，或不是List类型的
	 *
	 */
	protected long listSize(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "list")) {
                    return jedis.llen(key);
			}
                return -1L;
            });
		} catch (Exception e) {
			logger.error("error listSize:" + e.getMessage());
		}

		return -1;
	}
	/**
	 *
	 * @api {post} / jedis.lpop(key);移除并返回列表 key 的头元素。
	 * @apiName listRemoveFirstDao
	 * @apiGroup listRemoveFirstDao
	 * @apiVersion 0.1.0
	 * @apiDescription 移除List第一条数据
	 * @apiParam {Transaction} tx  事务 可为null
	 * @apiParam {String} key  键
	 * @apiSuccess {String} string 返回移除的值，如果key不存在，或key不是list，返回null
	 *
	 */
	protected String listRemoveFirstDao(final Transaction tx,final String key) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.lpop(key);
                    return null;
                }
                return jedis.lpop(key);
            });
		} catch (Throwable e) {
			throw new Exception("error listRemoveFirst:" + e.getMessage(), e);
		}

	}
	/**
	 *
	 * @api {post} / jedis.rpop(key);移除并返回列表 key 的尾元素。
	 * @apiName listRemoveEndDao
	 * @apiGroup listRemoveEndDao
	 * @apiVersion 0.1.0
	 * @apiDescription 移除List最后一条数据
	 * @apiParam {Transaction} tx  事务 可为null
	 * @apiParam {String} key  键
	 * @apiSuccess {String} string 返回移除的值，如果key不存在，或key不是list，返回null
	 *
	 */
	protected String listRemoveEndDao(final Transaction tx,final String key) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.rpop(key);
                    return null;
                }
                return jedis.rpop(key);
            });
		} catch (Throwable e) {
			throw new Exception("error listRemoveEnd:" + e.getMessage());
		}
	}
	/**
	 *
	 * @api {post} / jedis.lrem(key, index, value)移除并返回列表 key 的尾元素。
	 * @apiName listRemoveIndexIFEqValueDao
	 * @apiGroup listRemoveIndexIFEqValueDao
	 * @apiVersion 0.1.0
	 * @apiDescription 移除List指定index索引开始，往表尾搜索；如果index为负数，表示从末尾倒数多少个开始往表头搜索。移除与传人value值相等的所有值
	 * 根据参数 count 的值，移除列表中与参数 value 相等的元素。
	 * count 的值可以是以下几种：
	 * count > 0 : 从表头开始向表尾搜索，移除与 value 相等的元素，数量为 count 。
	 * count < 0 : 从表尾开始向表头搜索，移除与 value 相等的元素，数量为 count 的绝对值。
	 * count = 0 : 移除表中所有与 value 相等的值。
	 * #### 先创建一个表，内容排列是 ####
	 * #### morning hello morning helllo morning ####
	 *
	 * `redis> LPUSH greet "morning"`<br>
	 * `(integer) 1`<br>
	 * `redis> LPUSH greet "hello"`<br>
	 * `(integer) 2`<br>
	 * `redis> LPUSH greet "morning"`<br>
	 * `(integer) 3`<br>
	 * `redis> LPUSH greet "hello"`<br>
	 * `(integer) 4`<br>
	 * `redis> LPUSH greet "morning"`<br>
	 * `(integer) 5`<br>
	 * `redis> LRANGE greet 0 4         # 查看所有元素`<br>
	 * `1. "morning"`<br>
	 * `2. "hello"`<br>
	 * `3. "morning"`<br>
	 * `4. "hello"`<br>
	 * `5. "morning"`<br>
	 * `redis> LREM greet 2 morning     # 移除从表头到表尾，最先发现的两个 morning`<br>
	 * `(integer) 2                     # 两个元素被移除`<br>
	 * `redis> LLEN greet               # 还剩 3 个元素`<br>
	 * `(integer) 3`<br>
	 * `redis> LRANGE greet 0 2`<br>
	 * `1. "hello"`<br>
	 * `2. "hello"`<br>
	 * `3. "morning"`<br>
	 * `redis> LREM greet -1 morning    # 移除从表尾到表头，第一个 morning`<br>
	 * `(integer) 1`<br>
	 * `redis> LLEN greet               # 剩下两个元素`<br>
	 * `(integer) 2`<br>
	 * `redis> LRANGE greet 0 1`<br>
	 * `1. "hello"`<br>
	 * `2. "hello"`<br>
	 * `redis> LREM greet 0 hello      # 移除表中所有 hello`<br>
	 * `(integer) 2                    # 两个 hello 被移除`<br>
	 * `redis> LLEN greet`<br>
	 * `(integer) 0`<br>
	 * @apiParam {Transaction} tx  事务 可为null
	 * @apiParam {String} key  键
	 * @apiParam {int} index  键
	 * @apiParam {String} value  值
	 * @apiSuccess {boolean} true 返回如果移除key的个数大于0表示移除成功，否则一个都没移除
	 *
	 */
	protected boolean listRemoveIndexIFEqValueDao(final Transaction tx,final String key, final int index, final String value) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.lrem(key, index, value);
                    return true;
                }
                return jedis.lrem(key, index, value) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error listRemoveIndexIFEqValue:" + e.getMessage(), e);
		}
	}
	
	
// ------------------------------Map类型接口----------------------------------------------------------------
	/**
	 *
	 * @api {post} / jedis.hmset(key, valueMap);同时将多个 field-value (域-值)对设置到哈希表 key 中。此命令会覆盖哈希表中已存在的域。
	 * @apiName mapAddMapDao
	 * @apiGroup mapAddMapDao
	 * @apiVersion 0.1.0
	 * @apiDescription 将key-values存储到Map类型的数据里，注意：此命令会覆盖哈希表中已存在的域。如果 key 不存在，一个空哈希表被创建并执行 HMSET 操作。
	 *
	 *  `redis> HMSET website google www.google.com yahoo www.yahoo.com`<br>
	 * `OK`<br>
	 * `redis> HGET website google`<br>
	 * `"www.google.com"`<br>
	 * `redis> HGET website yahoo`<br>
	 * `"www.yahoo.com"`<br>
	 *  @apiParam {Transaction} tx  事务 可为null
	 * @apiParam {String} key  键
	 * @apiParam {Map} valueMap  map值
	 * @apiSuccess {boolean} true 存储成功
	 * @apiSuccess {boolean} false 存储失败
	 *
	 */
	protected boolean mapAddMapDao(final Transaction tx,final String key, final Map<String, String> valueMap) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.hmset(key, valueMap);
                    return true;
                }
                return "OK".equals(jedis.hmset(key, valueMap));
            });
		} catch (Throwable e) {
			throw new Exception("error mapAddMap:" + e.getMessage());
		}
	}
	/**
	 *
	 * @api {post} / jedis.hset(key, subKey, value);将哈希表 key 中的域 field 的值设为 value 。如果 key 不存在，一个新的哈希表被创建并进行 HSET 操作。如果域 field 已经存在于哈希表中，旧值将被覆盖。
	 * @apiName mapAddDao
	 * @apiGroup mapAddDao
	 * @apiVersion 0.1.0
	 * @apiDescription  设置Map中指定field的值为新值
	 * 注：key如果存在，必须为Map类型的，如果不存在，就新添加一个key
	 *  @apiParam {Transaction} tx  事务 可为null
	 * @apiParam {String} key  键
	 * @apiParam {String} subKey  键
	 * @apiParam {String} value  新值
	 * @apiSuccess {boolean} true 存储成功
	 * @apiSuccess {boolean} false 存储失败
	 *
	 */
	protected boolean mapAddDao(final Transaction tx,final String key, final String subKey, final String value) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.hset(key, subKey, value);
                    return true;
                }
                return jedis.hset(key, subKey, value) >= 0L;
            });
		} catch (Throwable e) {
			throw new Exception("error mapAdd:" + e.getMessage());
		}
	}
	/**
	 *
	 * @api {get} / jedis.hget(key, subKey);获取Map中指定field的value
	 * @apiName mapGet
	 * @apiGroup mapGet
	 * @apiVersion 0.1.0
	 * @apiDescription  返回哈希表 key 中给定域 field 的值。
	 * @apiParam {String} key  键
	 * @apiParam {String} subKey  域
	 * @apiSuccess {String} string 值
	 *
	 */
	protected String mapGet(final String key, final String subKey) {

		try {
			return this.execute(null, jedis -> jedis.hget(key, subKey));
		} catch (Exception e) {
			logger.error("error mapGet:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.hgetAll(key);返回哈希表 key 中，所有的域和值。
	 * @apiName mapGetAll
	 * @apiGroup mapGetAll
	 * @apiVersion 0.1.0
	 * @apiDescription  返回哈希表 key 中，所有的域和值。
	 * @apiParam {String} key  键
	 * @apiSuccess {Map} map  Map<String, String>获取指定Map中所有的域和值。
	 *
	 */
	protected Map<String, String> mapGetAll(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "hash")) {
                    return jedis.hgetAll(key);
                }
                return null;
            });
		} catch (Exception e) {
			logger.error("error mapGetAll:" + e.getMessage());
		}
		return null;
	}
	/**
	 *
	 * @api {get} / jedis.hvals(key);返回哈希表 key 中所有域的值。
	 * @apiName mapGetAllValue
	 * @apiGroup mapGetAllValue
	 * @apiVersion 0.1.0
	 * @apiDescription  返回哈希表 key 中所有域的值。
	 * @apiParam {String} key  键
	 * @apiSuccess {List} list  List<String>获取指定Map中所有的field的value
	 *
	 */
	protected List<String> mapGetAllValue(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "hash")) {
                    return jedis.hvals(key);
                }
                return null;
            });
		} catch (Exception e) {
			logger.error("error mapGetAllValue:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.hdel(key, subKeys);删除哈希表 key 中的一个或多个指定域，不存在的域将被忽略。
	 * @apiName mapRemoveKeyDao
	 * @apiGroup mapRemoveKeyDao
	 * @apiVersion 0.1.0
	 * @apiDescription  删除哈希表 key 中的一个或多个指定域，不存在的域将被忽略。
	 * @apiParam {String} key  键
	 * @apiParam {String...} subKeys  指定域
	 * @apiParam {Transaction} tx  事务
	 * @apiSuccess {boolean} true  删除成功
	 * @apiSuccess {boolean} false  删除失败
	 *
	 */
	protected boolean mapRemoveKeyDao(final Transaction tx,final String key, final String... subKeys) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.hdel(key, subKeys);
                    return true;
                }
                return jedis.hdel(key, subKeys) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error mapRemoveKey:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {get} / jedis.hexists(key, subKey);查看哈希表 key 中，给定域 field 是否存在。
	 * @apiName mapExistsKey
	 * @apiGroup mapExistsKey
	 * @apiVersion 0.1.0
	 * @apiDescription  查看哈希表 key 中，给定域 field 是否存在。
	 * @apiParam {String} key  键
	 * @apiParam {String...} subKeys  指定域
	 * @apiSuccess {boolean} true  该Map中存在指定的subKey
	 * @apiSuccess {boolean} false  该Map中不存在指定的subKey
	 *
	 */
	protected boolean mapExistsKey(final String key, final String subKey) {

		try {
			return this.execute(null, jedis -> jedis.hexists(key, subKey));
		} catch (Exception e) {
			logger.error("error mapExistsKey:" + e.getMessage());
		}

		return false;
	}
	/**
	 *
	 * @api {get} / jedis.hkeys(key);返回哈希表 key 中的所有域。
	 * @apiName mapGetAllKey
	 * @apiGroup mapGetAllKey
	 * @apiVersion 0.1.0
	 * @apiDescription  获取指定Map类型的所有key集合，只要该key是Map类型的，就会被查询出来
	 *
	 * `redis> HMSET website google www.google.com yahoo www.yahoo.com`<br>
	 * `OK`<br>
	 * `redis> HKEYS website`<br>
	 * `1) "google"`<br>
	 * `2) "yahoo"`<br>
	 * @apiParam {String} key  键
	 * @apiSuccess {Set} set Set<String>
	 *
	 */
	protected Set<String> mapGetAllKey(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "hash")) {
                    return jedis.hkeys(key);
                }
                return null;
            });
		} catch (Exception e) {
			logger.error("error mapGetAllKey:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.hlen(key);返回哈希表 key 中域的数量。
	 * @apiName mapSize
	 * @apiGroup mapSize
	 * @apiVersion 0.1.0
	 * @apiDescription  返回哈希表 key 中域的数量。如果该key不存在，或不为Map类型的返回-1
	 * @apiParam {String} key  键
	 * @apiSuccess {number} size  long获取指定Map的长度，如果该key不存在，或不为Map类型，返回-1
	 *
	 */
	protected long mapSize(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "hash")) {
                    return jedis.hlen(key);
                }
                return -1L;
            });
		} catch (Exception e) {
			logger.error("error mapSize:" + e.getMessage());
		}

		return -1;
	}
	/**
	 *
	 * @api {get} / jedis.hmget(key, subKeys);返回哈希表 key 中，一个或多个给定域的值。
	 * @apiName mapGetValueByKey
	 * @apiGroup mapGetValueByKey
	 * @apiVersion 0.1.0
	 * @apiDescription  获取指定Map的指定subKey的value
	 * 1、如果key不是Map类型的: 返回null
	 * 2、如果key是Map类型的，但是subKey不存在，返回[null]
	 * @apiParam {String} key  键
	 * @apiParam {String...} subKeys  指定域
	 * @apiSuccess {List} list  List<String>，返回哈希表 key 中，一个或多个给定域的值。
	 *
	 */
	protected List<String> mapGetValueByKey(final String key, final String... subKeys) {

		try {
			return this.execute(null, jedis -> jedis.hmget(key, subKeys));
		} catch (Exception e) {
			logger.error("error mapGetValueByKey:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} /  j.hincrBy(key, subKey, val);为哈希表 key 中的域 field 的值加上增量 increment 。增量也可以为负数，相当于对给定域进行减法操作。
	 * @apiName mapIncr
	 * @apiGroup mapIncr
	 * @apiVersion 0.1.0
	 * @apiDescription 为哈希表 key 中的域 field 的值加上增量 increment
	 * 	如果 key 不存在，一个新的哈希表被创建并执行 HINCRBY 命令。
	 * 	如果域 field 不存在，那么在执行命令前，域的值被初始化为 0 。
	 * @apiParam {String} key  键
	 * @apiParam {String...} subKeys  指定域
	 * @apiParam {number} val  增量
	 * @apiSuccess {number} value  Long哈希表 key 中域 subKeys 的值。
	 *
	 */
	protected Long mapIncr(final String key, final String subKey, Long val) {

		try {
			return this.execute(null, (j) -> j.hincrBy(key, subKey, val));
		} catch (Exception e) {
			logger.error("error mapIncr:" + e.getMessage());
		}

		return null;
	}


// ------------------------------Set接口----------------------------------------------------------------
	/**
	 *
	 * @api {post} /  jedis.sadd(key, values);将一个或多个 member 元素加入到集合 key 当中，已经存在于集合的 member 元素将被忽略。
	 * @apiName setAddValuesDao
	 * @apiGroup setAddValuesDao
	 * @apiVersion 0.1.0
	 * @apiDescription 往指定Set集合中添加多个值
	 * @apiParam {String} key  键
	 * @apiParam {String...} values  值
	 * @apiParam {Transaction} tx  事务
	 * @apiSuccess {number} value 被添加到集合中的新元素的数量，不包括被忽略的元素。
	 * 	1、如果为-1：表示该key已经存在，但不是Set类型，或出现异常
	 *  2、否则返回添加了多少个值的count数
	 *
	 */
	protected long setAddValuesDao(final Transaction tx,final String key, final String... values) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.sadd(key, values);
                    return 0L;
                }
                return jedis.sadd(key, values);
            });
		} catch (Throwable e) {
			throw new Exception("error setAddValues:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {get} /  jedis.scard(key);返回集合 key 的基数(集合中元素的数量)。
	 * @apiName setSize
	 * @apiGroup setSize
	 * @apiVersion 0.1.0
	 * @apiDescription 获取指定Set集合的长度
	 * @apiParam {String} key  键
	 * @apiSuccess {number} value -1:表示指定的key不是Set类型的，
	 *
	 */
	protected long setSize(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "set")) {
                    return jedis.scard(key);
                }
                return -1L;
            });
		} catch (Exception e) {
			logger.error("error setSize:" + e.getMessage());
		}

		return -1L;
	}
	/**
	 *
	 * @api {get} /  jedis.smembers(key);返回集合 key 中的所有成员。
	 * @apiName setGetAllValue
	 * @apiGroup setGetAllValue
	 * @apiVersion 0.1.0
	 * @apiDescription 获取指定Set集合中所有的value
	 * 注：如果该key存在但不是Set类型的，或key不存在，返回null
	 * @apiParam {String} key  键
	 * @apiSuccess {Set} value Set<String>集合中的所有成员。
	 *
	 */
	protected Set<String> setGetAllValue(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "set")) {
                    return jedis.smembers(key);
                }
                return null;
            });
		} catch (Exception e) {
			logger.error("error setGetAllValue:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.sismember(key, value);判断 member 元素是否集合 key 的成员。
	 * @apiName setExistsValue
	 * @apiGroup setExistsValue
	 * @apiVersion 0.1.0
	 * @apiDescription 如果 member 元素是集合的成员，返回 1 。
	 * 如果 member 元素不是集合的成员，或 key 不存在，返回 0 。
	 * @apiParam {String} key  键
	 * @apiParam {String} value  值
	 * @apiSuccess {boolean} true  指定Set集合中存在指定的value
	 * @apiSuccess {boolean} false  指定Set集合中不存在指定的value
	 *
	 */
	protected boolean setExistsValue(final String key, final String value) {

		try {
			return this.execute(null, jedis -> jedis.sismember(key, value));
		} catch (Exception e) {
			logger.error("error setExistsValue:" + e.getMessage());
		}

		return false;
	}
	/**
	 *
	 * @api {get} / jedis.srem(key, values);移除集合 key 中的一个或多个 member 元素，不存在的 member 元素会被忽略。
	 * @apiName setRemoveValuesDao
	 * @apiGroup setRemoveValuesDao
	 * @apiVersion 0.1.0
	 * @apiDescription 移除Set集合中指定的value
	 * 注：如果该key不是Set类型或不存在，返回false
	 * @apiParam {Transaction} tx  事务
	 * @apiParam {String} key  键
	 * @apiParam {String...} values  值
	 * @apiSuccess {boolean} true  删除成功
	 * @apiSuccess {boolean} false  删除失败
	 *
	 */
	protected boolean setRemoveValuesDao(final Transaction tx,final String key, final String... values) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.srem(key, values);
                    return true;
                }
                return jedis.srem(key, values) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error setRemoveValues:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {get} / jedis.smove(key1, key2, vlaue);将 vlaue 元素从 key1 集合移动到 key2 集合。
	 * @apiName setMoveDao
	 * @apiGroup setMoveDao
	 * @apiVersion 0.1.0
	 * @apiDescription 移动Set集合key1中的value到Set集合key2中
	 * 注：
	 * 	  1、key1 和 key2都必须存在，且必须为Set类型的，否则移动不成功
	 * 	  2、key1和key2可以相等，等效于没有移动，但是返回true
	 * @apiParam {Transaction} tx  事务
	 * @apiParam {String} key1  键
	 * @apiParam {String} key2  键
	 * @apiParam {String...} values  值
	 * @apiSuccess {boolean} true  移动成功
	 * @apiSuccess {boolean} false  移动失败
	 *
	 */
	protected boolean setMoveDao(final Transaction tx,final String key1, final String vlaue, final String key2) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.smove(key1, key2, vlaue);
                    return true;
                }
                return jedis.smove(key1, key2, vlaue) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error setMove:" + e.getMessage());
		}
	}
	/**
	 *
	 * @api {get} / jedis.sunion(keys);返回一个集合的全部成员，该集合是所有给定集合的并集。
	 * @apiName setJoin
	 * @apiGroup setJoin
	 * @apiVersion 0.1.0
	 * @apiDescription 将多个Set连接在一起，返回一个连接之后的Set集合
	 *  注：
	 *     1、如果不传参，返回null
	 *     2、如果传参的第一个参数不为Set类型的，返回null
	 *     3、如果从第二个参数开始，如果有某个参数不是Set类型的，结果返回null
	 *     4、如果从第二个参数开始，有某些参数不存在，但存在的参数都是Set类型的，可以返回非null的值
	 * 	   5、该操作不修改内存数据库的数据,所以不需要事务
	 * @apiParam {String...} key  键
	 * @apiSuccess {set} set  Set<String>新集合
	 *
	 */
	protected Set<String> setJoin(final String... keys) {

		try {
			return this.execute(null, jedis -> {
                if (keys.length > 0 && isType(jedis, keys[0], "set")) {
                    return jedis.sunion(keys);
                }
                return null;
            });
		} catch (Exception e) {
			logger.error("error setJoin:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.sinter(keys);返回一个集合的全部成员，该集合是所有给定集合的交集。
	 * @apiName setSinter
	 * @apiGroup setSinter
	 * @apiVersion 0.1.0
	 * @apiDescription 返回给定Set集合的交集
	 * 注：
	 *    1、如果有某个参数存在，但不是Set类型的，结果返回null
	 *    2、如果有某个参数不存在，在求交集时忽略该参数
	 *    3、该操作不修改内存数据库的数据,所以不需要事务
	 * @apiParam {String...} key  键
	 * @apiSuccess {set} set  Set<String>新集合
	 *
	 */
	protected Set<String> setSinter(final String... keys) {

		try {
			return this.execute(null, jedis -> jedis.sinter(keys));
		} catch (Exception e) {
			logger.error("error setSinter:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.sdiff(keys);返回一个集合的全部成员，该集合是所有给定集合的差集
	 * @apiName setDiff
	 * @apiGroup setDiff
	 * @apiVersion 0.1.0
	 * @apiDescription 返回Set集合key1在集合key2[key3...]中的差集
	 * 注：
	 *    1、如果有某个参数存在，但不是Set类型的，结果返回null
	 *    2、如果有某个参数不存在，在求差集时忽略该参数
	 *    3、该操作不修改内存数据库的数据,所以不需要事务
	 * @apiParam {String...} key  键
	 * @apiSuccess {set} set  Set<String>新集合
	 *
	 */
	protected Set<String> setDiff(final String... keys) {

		try {
			return this.execute(null, jedis -> jedis.sdiff(keys));
		} catch (Exception e) {
			logger.error("error setDiff:" + e.getMessage());
		}

		return null;
	}

// ------------------------------LinkedHash（sorted set）接口----------------------------------------------------------------
	/**
	 *
	 * @api {get} / jedis.zadd(key, scoreMembers);将一个或多个 member 元素及其 score 值加入到有序集 key 当中。
	 * @apiName zsetAddDao
	 * @apiGroup zsetAddDao
	 * @apiVersion 0.1.0
	 * @apiDescription 排序规则：按照分数（scope）升序排序，如果分数（scope）相同，按照分数对应的value(值)的字典顺序排序
	 * 向LinkedHashSet集合添加元素
	 * 注：
	 * 	    1、如果key存在，必须为zset类型的
	 * 	    2、如果value在集合中存在，将返回false
	 *      3、scoreMembers 这个Map中如果有某个值在集合中存在，该条数据将不能被添加进去，其他如果被添加进去了，最终返回的结果还是true
	 *
	 * @apiParam {String} key  键
	 * @apiParam {Map} scoreMembers  Map<String, Double>值-分数对
	 * @apiSuccess {boolean} true  添加成功
	 * @apiSuccess {boolean} false  添加失败
	 *
	 */
	protected boolean zsetAddDao(final Transaction tx,final String key, final Map<String, Double> scoreMembers) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.zadd(key, scoreMembers);
                    return true;
                }
                return jedis.zadd(key, scoreMembers) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error zsetAdd:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {get} / jedis.zcard(key);返回有序集 key 的基数。
	 * @apiName zsetSize
	 * @apiGroup zsetSize
	 * @apiVersion 0.1.0
	 * @apiDescription 获取LinkedHashSet集合长度
	 * -1:表示该key存在，但不是zset类型的；或出现异常
	 * @apiParam {String} key  键
	 * @apiSuccess {number} size  LinkedHashSet集合长度
	 *
	 */
	protected long zsetSize(final String key) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "zset")) {
                    return jedis.zcard(key);
                }
                return -1L;
            });
		} catch (Exception e) {
			logger.error("error zsetSize:" + e.getMessage());
		}

		return -1L;
	}
	/**
	 *
	 * @api {get} / jedis.zcount(key, scoreStart, scoreEnd);返回有序集 key 中， score 值在 min 和 max 之间(默认包括 score 值等于 min 或 max )的成员的数量。
	 * @apiName zsetCount
	 * @apiGroup zsetCount
	 * @apiVersion 0.1.0
	 * @apiDescription 获取LinkedHashSet集合中指定区间分数的个数
	 *
	 * 注：
	 *    1、key必须为zset类型的
	 * 	  2、-1：表示异常或key不存在，或key存在，或key存在，但不是zset类型的
	 * @apiParam {String} key  键
	 * @apiParam {double} scoreStart  起始分数
	 * @apiParam {double} scoreEnd  终止分数
	 * @apiSuccess {number} size LinkedHashSet集合中指定区间分数的个数
	 *
	 */
	protected long zsetCount(final String key, final double scoreStart, final double scoreEnd) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "zset")) {
                    return jedis.zcount(key, scoreStart, scoreEnd);
                }

                return -1L;
            });
		} catch (Exception e) {
			logger.error("error zsetCount:" + e.getMessage());
		}

		return -1L;
	}
	/**
	 *
	 * @api {get} / jedis.zrange(key, start, end);返回有序集 key 中，指定区间内的成员。	其中成员的位置按 score 值递增(从小到大)来排序。
	 * @apiName zsetDescOrder
	 * @apiGroup zsetDescOrder
	 * @apiVersion 0.1.0
	 * @apiDescription 获取LinkedHashSet集合指定区间降序（从大到小）排序,如果分数相同，在按照字典顺序排序（而不是从大到小排序哦！）的子集合
	 * @apiParam {String} key  键
	 * @apiParam {number} start  起始索引
	 * @apiParam {number} end  终止索引
	 * @apiSuccess {Set} set Set<String> 指定索引下的子集合（按score排序）
	 *
	 */
	protected Set<String> zsetDescOrder(final String key, final long start, final long end) {

		try {
			return this.execute(null, jedis -> jedis.zrange(key, start, end));
		} catch (Exception e) {
			logger.error("error zsetDescOrder:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.zrangeByLex(key, demoMin, demoMax);获取LinkedHashSet集合字典区间(即：获取“a” ~ "k" 字典区间的子集合数)有序集合的成员
	 * @apiName zsetDic
	 * @apiGroup zsetDic
	 * @apiVersion 0.1.0
	 * @apiDescription 获取LinkedHashSet集合字典区间(即：获取“a” ~ "k" 字典区间的子集合数)有序集合的成员
	 *  注：key必须是zset类型的，且min和max不能为null
	 * @apiParam {String} key  键
	 * @apiParam {String} min  起始索引
	 * @apiParam {String} max  终止索引
	 * @apiSuccess {Set} set Set<String> 子集合
	 *
	 */
	protected Set<String> zsetDic(final String key, final String min, final String max) {

		try {
			return this.execute(null, jedis -> {

                String demoMin = "", demoMax = "";
                if (isType(jedis, key, "zset") && min != null && max != null) {
                    demoMin = "["+min;
                    demoMax = "["+max;
                    return jedis.zrangeByLex(key, demoMin, demoMax);
                }

                return null;
            });
		} catch (Exception e) {
			logger.error("error zsetDic:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} /   jedis.zrangeByScore(key, min, max);返回有序集 key 中，所有 score 值介于 min 和 max 之间(包括等于 min 或 max )的成员。有序集成员按 score 值递增(从小到大)次序排列。具有相同 score 值的成员按字典序(lexicographical order)来排列
	 * @apiName zsetScore
	 * @apiGroup zsetScore
	 * @apiVersion 0.1.0
	 * @apiDescription 获取LinkedHashSet集合分数区间有序集合的成员
	 *  注：
	 *     1、key必须为zset类型
	 *     2、min必须小等于max
	 * @apiParam {String} key  键
	 * @apiParam {double} min  起始分数
	 * @apiParam {double} max  终止分数
	 * @apiSuccess {Set} set Set<String> 指定分数下的子集合（按score排序）
	 *
	 */
	protected Set<String> zsetScore(final String key, final double min, final double max) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "zset") && min <= max) {
                    return jedis.zrangeByScore(key, min, max);
                }
                return null;
            });
		} catch (Exception e) {
			logger.error("error zsetScore:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.zrank(key, value);返回有序集 key 中成员 member 的排名。其中有序集成员按 score 值递增(从小到大)顺序排列。
	 * @apiName zsetGetIndexByValue
	 * @apiGroup zsetGetIndexByValue
	 * @apiVersion 0.1.0
	 * @apiDescription 获取LinkedHashSet集合指定成员（value）值的索引
	 * 注：
	 *    1、key必须是zset类型的
	 *    2、value必须存在
	 * @apiParam {String} key  键
	 * @apiParam {String} value  元素
	 * @apiSuccess {number} index long 集合指定成员（value）值的索引
	 *
	 */
	protected long zsetGetIndexByValue(final String key, final String value) {

		try {
			return this.execute(null, jedis -> jedis.zrank(key, value));
		} catch (Exception e) {
			logger.error("error zsetGetIndexByValue:" + e.getMessage());
		}

		return -1;
	}
	/**
	 *
	 * @api {get} / jedis.zrem(key, values);移除有序集 key 中的一个或多个成员，不存在的成员将被忽略。
	 * @apiName zsetRemoveByValueDao
	 * @apiGroup zsetRemoveByValueDao
	 * @apiVersion 0.1.0
	 * @apiDescription 移除LinkedHashSet集合指定成员value(即通过value删除集合中的成员)
	 * 注：
	 *    1、key必须是zset类型的
	 *    2、values中只要有一个被移除了，都将返回true
	 * @apiParam {String} key  键
	 * @apiParam {String...} values  多个元素
	 * @apiParam {Transaction} tx  事务
	 * @apiSuccess {boolean} true  移除成功
	 *
	 */
	protected boolean zsetRemoveByValueDao(final Transaction tx,final String key, final String... values) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.zrem(key, values);
                    return true;
                }
                return jedis.zrem(key, values) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error zsetRemoveByValue:" + e.getMessage(), e);
		}
	}

	/**
	 *
	 * @api {get} / jedis.zrevrank(key, value);返回有序集 key 中成员 member 的排名。其中有序集成员按 score 值递减(从大到小)排序。
	 * @apiName zsetGetRankNumByValue
	 * @apiGroup zsetGetRankNumByValue
	 * @apiVersion 0.1.0
	 * @apiDescription 获取LinkedHashSet集合指定值(value)的排名数，排名最大的排名数为0  （即获取出来的值表示在集合中第几大）
	 * 也就是说：分数值越大的value，排名值越小
	 *
	 * 注：
	 * 	   1、key必须为zset
	 *     2、value必须在zset中存在
	 *     3、-1：表示key是zset类型的，或value不存在，或出现异常
	 * @apiParam {String} key  键
	 * @apiParam {String} value  元素
	 * @apiSuccess {number} true long 排名（从0开始）
	 *
	 */
	protected long zsetGetRankNumByValue(final String key, final String value) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "zset")) {
                    return jedis.zrevrank(key, value);
                }

                return -1L;
            });
		} catch (Exception e) {
			logger.error("error zsetGetRankNumByValue:" + e.getMessage());
		}

		return -1;
	}
	/**
	 *
	 * @api {get} / jedis.zscore(key, value);返回有序集 key 中，成员 member 的 score 值。
	 * @apiName zsetGetScoreNumByValue
	 * @apiGroup zsetGetScoreNumByValue
	 * @apiVersion 0.1.0
	 * @apiDescription  获取LinkedHashSet集合指定成员value的分数
	 *  注：
	 *     1、如果key不是zset类型的、或存在，返回null
	 *     2、如果value在集合中不存在，返回null
	 * @apiParam {String} key  键
	 * @apiParam {String} value  元素
	 * @apiSuccess {number} true Double 分数
	 *
	 */
	protected Double zsetGetScoreNumByValue(final String key, final String value) {

		try {
			return this.execute(null, jedis -> {
                if (isType(jedis, key, "zset")) {
                    return jedis.zscore(key, value);
                }

                return null;
            });
		} catch (Exception e) {
			logger.error("error zsetGetScoreNumByValue:" + e.getMessage());
		}

		return null;
	}
	
	
// ------------------------------通用接口----------------------------------------------------------------	
	/**
	 *
	 * @api {get} / jedis.exists(key);检查给定 key 是否存在。
	 * @apiName exists
	 * @apiGroup exists
	 * @apiVersion 0.1.0
	 * @apiDescription  是否存在该key，不管该key是什么类型的
	 * @apiParam {String} key  键
	 * @apiSuccess {boolean} true 存在
	 * @apiSuccess {boolean} false 不存在
	 *
	 */
	protected boolean exists(final String key) {

		try {
			return this.execute(null, jedis -> jedis.exists(key));
		} catch (Exception e) {
			logger.error("error exists:" + e.getMessage());
		}

		return false;
	}
	/**
	 *
	 * @api {get} / jedis.del(key);删除给定的一个或多个 key 。
	 * @apiName removeKeysDao
	 * @apiGroup removeKeysDao
	 * @apiVersion 0.1.0
	 * @apiDescription  删除指定key，不管该key是什么类型的
	 * 注：如果key不存在，返回false
	 * @apiParam {String...} key  键
	 * @apiParam {Transaction} tx  事务
	 * @apiSuccess {boolean} true 删除成功
	 * @apiSuccess {boolean} false 不存在
	 *
	 */
	protected boolean removeKeysDao(final Transaction tx,final String... key) throws Exception {

		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.del(key);
                    return true;
                }
                return jedis.del(key) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error removeKeys:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {get} / jedis.type(key);返回 key 所储存的值的类型。
	 * @apiName type
	 * @apiGroup type
	 * @apiVersion 0.1.0
	 * @apiDescription  获取key的类型
	 * @apiParam {String} key  键
	 * @apiSuccess {String} type none (key不存在) string (字符串) list (列表) set (集合) zset (有序集) hash (哈希表)
	 *
	 */
	protected String type(final String key) {

		try {
			return this.execute(null, jedis -> {
                String typeStr = jedis.type(key);
                return !"none".equals(typeStr) ? typeStr : null;
            });
		} catch (Exception e) {
			logger.error("error type:" + e.getMessage());
		}

		return null;
	}
	/**
	 *
	 * @api {get} / jedis.expire(key, seconds);为给定 key 设置生存时间，当 key 过期时(生存时间为 0 )，它会被自动删除。
	 * @apiName expireDao
	 * @apiGroup expireDao
	 * @apiVersion 0.1.0
	 * @apiDescription  设置key的的过期时间
	 *  注：
	 *     1、key必须存在
	 *     2、seconds必须大于0，seconds表示设置多少秒
	 * @apiParam {String} key  键
	 * @apiParam {int} seconds  过期时间
	 * @apiParam {Transaction} tx  事务
	 * @apiSuccess {boolean} true 设置成功
	 *
	 */
	protected boolean expireDao(final Transaction tx,final String key, final int seconds) throws Exception {
		
		try {
			return this.execute(tx, jedis -> {
                if (tx != null) {
                    tx.expire(key, seconds);
                    return true;
                }
                return jedis.expire(key, seconds) > 0;
            });
		} catch (Throwable e) {
			throw new Exception("error expire:" + e.getMessage(), e);
		}
	}
	/**
	 *
	 * @api {get} / jedis.ttl(key);以秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。
	 * @apiName getExpire
	 * @apiGroup getExpire
	 * @apiVersion 0.1.0
	 * @apiDescription 获取key的过期时间，以秒为单位返回
	 * 注：
	 *   1、key必须存在
	 *   2、-1：表示key永久
	 *   3、-2：表示key过期，或异常
	 * @apiParam {String} key  键
	 * @apiSuccess {number} time long剩余生存时间
	 *
	 */
	protected long getExpire(final String key) {
		
		try {
			return this.execute(null, jedis -> jedis.ttl(key));
		} catch (Exception e) {
			logger.error("error getExpire:" + e.getMessage());
		}

		return -2L;
	}
	/**
	 *
	 * @api {get} / jedis.pttl(key);以毫秒为单位，返回给定 key 的剩余生存时间(TTL, time to live)。
	 * @apiName getExpireMills
	 * @apiGroup getExpireMills
	 * @apiVersion 0.1.0
	 * @apiDescription 获取key的过期时间，以毫秒为单位返回
	 * 注：
	 *   1、key必须存在
	 *   2、-1：表示key永久
	 *   3、-2：表示key过期，或异常
	 * @apiParam {String} key  键
	 * @apiSuccess {number} time long 剩余生存时间
	 *
	 */
	protected long getExpireMills(final String key) {
		
		try {
			return this.execute(null, jedis -> jedis.pttl(key));
		} catch (Exception e) {
			logger.error("error getExpireMills:" + e.getMessage());
		}

		return -2L;
	}
	/**
	 *
	 * @api {get} / jedis.keys(pattern);查找所有符合给定模式 pattern 的 key 。
	 * @apiName getKeys
	 * @apiGroup getKeys
	 * @apiVersion 0.1.0
	 * @apiDescription 获取指定正则的所有keys
	 *  注：
	 *  如果要获取所有key，则pattern为"*"
	 *  KEYS * 匹配数据库中所有 key 。
	 *  KEYS h?llo 匹配 hello ， hallo 和 hxllo 等。
	 *  KEYS h*llo 匹配 hllo 和 heeeeello 等。
	 *  KEYS h[ae]llo 匹配 hello 和 hallo ，但不匹配 hillo 。
	 *  特殊符号用 \ 隔开
	 * @apiParam {String} pattern  正则
	 * @apiSuccess {number} long Set<String>剩余生存时间
	 *
	 */
	protected Set<String> getKeys(final String pattern) {
		
		try {
			return this.execute(null, jedis -> jedis.keys(pattern));
		} catch (Exception e) {
			logger.error("error getKeys:" + e.getMessage());
		}

		return null;
	}
	
	private boolean isType(Jedis jedis, String key, String typeName) {
		
		if (jedis.exists(key)) {
			return typeName.equals(jedis.type(key));
		}
		
		return true;
	}
	
	private String[] caseMapToArray(Map<String, String> map) {
		if (map != null && !map.isEmpty()) {
			
			String[] keysvalues = new String[map.size()*2];
			
			int i = 0;
			for (String key : map.keySet()) {
				keysvalues[i++] = key;
				keysvalues[i++] = map.get(key);
			}
			
			return keysvalues;
		}
		
		return null;
	} 
}