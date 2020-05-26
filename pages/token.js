import { useAuthRedirect } from '@services/AWS_Cognito/auth'
import { useRouter }       from 'next/router'
import React               from 'react'

const extractFirst = value => Array.isArray(value) ? value[0] : value

// When a user comes back from authenticating, the url looks like this:
//   /token#id_token=....
// At this point, there will be no cookies yet. If we would render any page on
// the server now, it would seem as-if the user is not authenticated yet.
//
// We therefore wait until Amplify has set its cookies. It does this
// automatically because the id_token hash is present. Then we redirect the
// user back to the main page. That page can now use SSR as the user will have
// the necessary cookies ready.
export default () => {
  const router = useRouter()
  useAuthRedirect(() => {
    // We are not using the router here, since the query object will be empty
    // during the prerendering if the page is statically optimized.
    // So the router's location would return no search the first time.
    router.replace('/dashboard')
  })
  
  return <div/>
}
