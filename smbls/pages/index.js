import { main } from './main'
import { studio } from './studio'
import { contact } from './contact'
import { delivery, privacy, refund, terms } from './static'
import { item } from './item'

export default {
  '/': main,
  '/studio': studio,
  // '/about': about,
  '/contact': contact,
  '/terms': terms,
  '/privacy': privacy,
  '/delivery': delivery,
  '/return': refund,
  '/item': item
}
