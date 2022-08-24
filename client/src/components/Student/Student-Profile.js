import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_STUDENT, QUERY_ME_STUDENT } from '../../utils/queries';
import Auth from '../../utils/auth';

const StudentProfile = (props) => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_STUDENT : QUERY_ME_STUDENT, {
        variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};

    // // navigate to personal profile page if username is yours
    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //     return <Navigate to="/studentProfile:username" />;
    // }

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (!user?.username) {
    //     return (
    //         <h4>
    //             You need to be logged in to see this. Use the navigation links above to
    //             sign up or log in!
    //         </h4>
    //     );
    // }

    return (
        <div>
            <div>
                <h2>
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>
            </div>

            <h3>JOBS</h3>

      {/* <div class="container">
      <div class="row">
      
      <div class="grid-example col s12 m6"><span class="flow-text">JOBS</span></div> */}

      <div class="scrolling-wrapper-flexbox">
        <div class="col s12 m6">
          <div class=" card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>



      </div>

      <div class="scrolling-wrapper-flexbox">
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>

      <div class="scrolling-wrapper-flexbox">
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>

      <div class="scrolling-wrapper-flexbox">
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card deep-purple darken-1">
            <div class="card-content white-text">
              <span class="card-title">Card Title</span>
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>



    </div>
    );
};

export default StudentProfile;