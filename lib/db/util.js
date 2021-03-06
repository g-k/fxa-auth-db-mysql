/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict'


const BOUNCE_TYPES = new Map([
  ['__fxa__unmapped', 0], // a bounce type we don't yet recognize
  ['Permanent', 1], // Hard
  ['Transient', 2], // Soft
  ['Complaint', 3]  // Complaint
])

const BOUNCE_SUB_TYPES = new Map([
  ['__fxa__unmapped', 0], // a bounce type we don't yet recognize
  ['Undetermined', 1],
  ['General', 2],
  ['NoEmail', 3],
  ['Suppressed', 4],
  ['MailboxFull', 5],
  ['MessageTooLarge', 6],
  ['ContentRejected', 7],
  ['AttachmentRejected', 8],
  ['abuse', 9],
  ['auth-failure', 10],
  ['fraud', 11],
  ['not-spam', 12],
  ['other', 13],
  ['virus', 14]
])

module.exports = {

  mapEmailBounceType(val) {
    if (typeof val === 'number') {
      return val
    } else {
      return BOUNCE_TYPES.get(val) || 0
    }
  },

  mapEmailBounceSubType(val) {
    if (typeof val === 'number') {
      return val
    } else {
      return BOUNCE_SUB_TYPES.get(val) || 0
    }
  }

}
