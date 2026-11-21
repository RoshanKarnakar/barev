import { useParams } from 'react-router-dom'
import { siteConfig } from '../config/site'
import { useSeo } from '../lib/useSeo'
import Button from '../components/Button'
import PageHero from '../components/PageHero'

const titles: Record<string, string> = {
  'privacy-policy': 'Privacy Policy',
  terms: 'Terms',
  warranty: 'Warranty',
  'refund-policy': 'Refund Policy',
}

export default function Legal() {
  const { slug = '' } = useParams()
  const title = titles[slug] ?? 'Policy'
  useSeo(`${title} | BAR Electric Vehicles`, `${title} for ${siteConfig.name}.`)
  return (
    <>
      <PageHero title={title} />
      <section className="section-y bg-white">
        <div className="container-x max-w-3xl">
          <p className="text-lg text-graphite/75">
            The {title.toLowerCase()} for {siteConfig.legalName} will be published here. Until then, please contact BAR with any questions.
          </p>
          <Button to="/contact" variant="dark" className="mt-6">Contact BAR</Button>
        </div>
      </section>
    </>
  )
}
