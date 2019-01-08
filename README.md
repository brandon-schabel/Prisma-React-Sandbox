to deploy prisma app run command
prisma deploy

and if you want to regenerate schema files
graphql get-schema

but that has already been added to prisma.yml as
hooks: 
  post-deploy:
    - graphql get-schema

which will automaticall redeploy schema files on deployment so they are always in sync