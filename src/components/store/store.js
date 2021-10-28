import {makeAutoObservable} from 'mobx'

class store {
    visitorList = []
    musicList = []
    
    constructor() {
        makeAutoObservable(this, {})
    }

    addVisitor(visitor) {
        this.visitorList = [...this.visitorList, visitor]
    }

    deleteVisitor(visitor) {
        this.visitorList = this.visitorList.filter(item => item.id !== visitor.id)
    }
    
    addMusic(music) {
        this.musicList = [...this.musicList, music]
    }

    deleteMusic(music) {
        this.musicList = this.musicList.filter(item => item.id !== music.id)
    }

}

export default new store()
