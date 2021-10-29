import {makeAutoObservable} from 'mobx'

class store {
    dance = {
        'RnB': ['RnB', 'Hip-hop'],
        'Electrohouse': ['Electrodance', 'House'],
        'Pop': ['Pop']
    }
    
    visitorList = [
        {
            id: 1,
            name: 'Nelka',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 2,
            name: 'Test',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 3,
            name: 'Boris',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 4,
            name: 'Moris',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 5,
            name: 'Monya',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 6,
            name: 'Egor',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 7,
            name: 'Olga',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 8,
            name: 'Sasha',
            skills: ['RnB']
        },
        {
            id: 9,
            name: 'NIkita',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 10,
            name: 'Vanya',
            skills: ['RnB']
        },
        {
            id: 11,
            name: 'Jack',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 12,
            name: 'Bublik',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 13,
            name: 'Igor',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 14,
            name: 'Nelka',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 15,
            name: 'Nelka',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 16,
            name: 'Nelka',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 17,
            name: 'Nelka',
            skills: ['RnB', 'House', 'Pop']
        },
        {
            id: 18,
            name: 'Nelka',
            skills: ['Pop']
        },
        {
            id: 19,
            name: 'Nelka',
            skills: ['RnB', 'House', 'Pop']
        },
    ]
    musicList = [
        {
            id: 1,
            name: 'track 1',
            genre: 'RnB'
        },
        {
            id: 2,
            name: 'track 2',
            genre: 'Pop'
        },
        {
            id: 3,
            name: 'track 3',
            genre: 'Electrohouse'
        },
        {
            id: 4,
            name: 'track 4',
            genre: 'RnB'
        },
    ]
    selectedMusicToPlay = null
    createVisitorDialog = false
    createMusicDialog = false
    deleteDialog = false
    deleteDialogText = {
        id: '',
        text: '',
        btn: ''
    }
    selectedVisitor = null
    selectedPlace = 'all'
    selectedMusicToDelete = null
    selectedGenre = 'all'
    isPlaying = false
    
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

    setSelectedMusicToPlay(music) {
        this.selectedMusicToPlay = music
    }

    setCreateVisitorDialog(value) {
        this.createVisitorDialog = value
    }

    setCreateMusicDialog(value) {
        this.createMusicDialog = value
    }

    setDeleteDialog(value) {
        this.deleteDialog = value
    }

    setDeleteDialogText(text) {
        this.deleteDialogText = text
    }

    setSelectedVisitor(visitor) {
        this.selectedVisitor = visitor
    }

    setSelectedPlace(place) {
        this.selectedPlace = place
    }

    setSelectedMusicToDelete(music) {
        this.selectedMusicToDelete = music
    }

    setSelectedGenre(genre) {
        this.selectedGenre = genre
    }

    setIsPlaying(value) {
        this.isPlaying = value
    }

}

export default new store()
