# kimchi-test

A tiny sample project I used to try Kimchi's autonomous coding mode (Remote Workspaces) as a new user, for the Kimchi Product Manager home task.

- `src/creators.js` — add and find creators (handle, email, platform, followers)
- `src/campaigns.js` — brand campaigns and creator deals

Run the tests:

    npm test

## What the agent did

Task given to Kimchi:

> Add input validation to addCreator in src/creators.js: the handle must start with @, the email must look like an email, the platform must be instagram, tiktok or youtube (ignore letter case, so "Instagram" is accepted), and followers must be a whole number of 0 or more (so 12000.5 is rejected). If something is wrong, throw an error with a clear message. Add tests for each case.

The validation in `src/creators.js` and the 5 new tests in `test/creators.test.js` were written by the Kimchi agent (model: auto, kimi-k3). The remote run worked on a reconstructed copy of the project, because the code didn't reach the sandbox, so the local agent applied the same changes to this repository. All 8 tests pass.
