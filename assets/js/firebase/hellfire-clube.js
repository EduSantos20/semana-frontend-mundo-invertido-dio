import app from './app.js'

import {
  getFirestore,
  collection,
  addDoc
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClub(subscription) {
  const db = getFirestore(app)
  const hellfireClubeCollection = collection(db, 'hellfire-clube')
  const docRet = await addDoc(hellfireClubeCollection, subscription)
  return docRet.id
}
