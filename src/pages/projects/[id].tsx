export function getStaticProps() {
  return {
    props: {
      id: 1,
    },
  }
}

export function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
      {
        params: {
          id: '2',
        },
      },
    ],
    fallback: false,
  }
}

export default function Project({ id }) {
  return <h1>{id}</h1>
}
