# csp451
The color of the text which was resulted from the conﬂict is resolved after we use git push command line locally. It will force to overwirte the remote changes which is red colour with the local changes which is green colour.



The ﬁnal color of the text after resetting and pulling changes is darkolivegreen. After we use git pull or git push command line, any discrepancies with prior versions whatever it is at remote or local folder would finally be resolved, ensuring consistency with the expected design specifications.



Steps: 1. Create a new branch: Under this new branch, change some content at index.html and commit it. Then push the changes to the remote repository. 2. Create conflict: Firstly, go back to main, then change some content at the same file in VSCode and push the change to remote repository again. 3. Resolve the conflict by VSCode: There will be a Merge Editor tab popped out when you open the VSCode. Use it to choose the current change or incoming change to complete merge.




Pull Request (PR) workflow:
Step 1: Create new functional branches from the main branch to isolate changes related to a particular task or function. This ensures that the main branch remains stable during development.
Step 2: Make changes to the functional branch and then submit them locally. Changes are then pushed to the remote repository for collaboration.
Step 3: Open the pull request (PR) on the GitHub and propose to merge the functional branch into the main branch. PR includes a detailed description of the changes made to ensure the reviewer is clear to understand.
Step 4: Team members review the changes in the PR. This may involve checking the code, providing feedback, and requesting changes when needed. Any discussion or suggested improvements will appear in the comments section of the PR.
Step 5: Once all the feedback is resolved, the reviewer approves the PR. Approval indicates that the changes meet the project standards and are ready to merge.
Step 6: Once the PR is approved, the changes are merged into the main branch. PR is closed and can be deleted if it is no longer required.

