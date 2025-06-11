import Image from 'next/image';
import Link from 'next/link';
import * as styles from '@/styles/organisms/memberCompaniesPreview.css';

const companies = [
  {
    id: 1,
    name: 'TechFlow Solutions',
    specialty: 'Digital Transformation & AI',
    logo: '/placeholder.svg?height=80&width=200',
  },
  {
    id: 2,
    name: 'Design Studio Zen',
    specialty: 'UX/UI Design & Branding',
    logo: '/placeholder.svg?height=80&width=200',
  },
  {
    id: 3,
    name: 'Quantum Analytics',
    specialty: 'Data Science & Analytics',
    logo: '/placeholder.svg?height=80&width=200',
  },
  {
    id: 4,
    name: 'Green Energy Co.',
    specialty: 'Sustainable Technology',
    logo: '/placeholder.svg?height=80&width=200',
  },
];

export default function MemberCompaniesPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingBlock}>
          <h2 className={styles.title}>Our Member Companies</h2>
          <p className={styles.description}>
            Discover the diverse expertise and innovative solutions offered by our carefully selected partner companies.
          </p>
        </div>

        <div className={styles.grid}>
          {companies.map((company) => (
            <div key={company.id} className={styles.card}>
              <div>
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={200}
                  height={80}
                  className={styles.logo}
                />
              </div>
              <h3 className={styles.name}>{company.name}</h3>
              <p className={styles.specialty}>{company.specialty}</p>
            </div>
          ))}
        </div>

        <div className={styles.buttonWrapper}>
          <Link href="/companies" className="btn-primary">
            View All Companies
          </Link>
        </div>
      </div>
    </section>
  );
}
