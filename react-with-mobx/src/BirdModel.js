import { observable } from 'mobx'

class Bird {
  @observable id
  @observable name
  @observable color

  constructor(bird) {
    this.id = Date.now()
    this.name = bird.name
    this.color = bird.color
  }
}

export default Bird
