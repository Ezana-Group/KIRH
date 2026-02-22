/**
 * Royalty-free African-centric images for KIRH theme.
 * Sources: Pexels (pexels.com/license) – African community, care, empowerment.
 */

const pexels = (id: string, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const siteImages = {
  // African community – group / team together
  aboutPreview: pexels('667200'),
  // African team collaboration / partnership
  story: pexels('3764310'),
  // Community gathering / event
  communityImpact: pexels('667202'),
  // African person learning / empowerment (professional, success)
  successStory: pexels('4153135'),
  // Care / compassion – African woman portrait, warm
  heroCare: pexels('935985', 1600),
  // Inclusion – African diversity / group
  inclusion: pexels('2170387'),
  // Volunteer / support – African community
  volunteerSupport: pexels('3193551'),
}
