import{initializeApp} from 'firwbase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore}from 'firebase/firestore'
import constants from 'expo-constants'

const firebaseConfig = {
    apikey: process.env.apikey,
      authDomain:constants.manifest.extra.authDomain,
      projectId:constants.manifest.extra.projectId,
      storageBucket:constants.manifest.extra.storageBucket,
      messagingSenderId:constants.manifest.extra.messagingSenderId,
      appID:constants.manifest.extra.appID,
      databaseURL:constants.manifest.extra.extra.databaseURL
}

initializeApp(firebaseConfig)
export const auth = getAuth()
export const database = getFirestore()
