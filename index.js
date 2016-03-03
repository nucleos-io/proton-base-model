'use strict'

const BaseClass = require('proton-base-class')

/**
 * @class BaseModel
 * @classdesc The base class where every proton odm model must be inherit
 */
class BaseModel extends BaseClass {

  constructor(proton) {
    super(proton)
  }

  /**
   * @method build
   * @abstract
   * @description In this method you must build your model
   * @param adapter - the database adapter for example mongoose, sequelize,
   * etc...
   */
  build(adapter) {
    throw new Error('The method build must be implemented')
  }

  /**
   * @method get store
   * @description this method return the store with which the model will work,
   * by default every model use the default store declared in the database
   * config file, if a developer want to use another store should override
   * this method and return that he want
   * @return {String} - The store with which the model will work
   */
  get store() {
    return this.proton.app.config.database.store
  }

}

module.exports = BaseModel
