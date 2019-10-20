import { observable, action, computed } from 'mobx'

import BirdModel from './BirdModel'

class BirdStore {
  @observable birds = []

  @action
  addBird = bird => {
    this.birds.push(new BirdModel(bird))
  }

  @computed
  get birdCount() {
    return this.birds.length
  }
}

export default new BirdStore()
