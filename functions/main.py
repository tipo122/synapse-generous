# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

from firebase_functions import https_fn, options
from firebase_admin import initialize_app

initialize_app()

@https_fn.on_request(
    cors=options.CorsOptions(cors_origins="*", cors_methods=["get", "post"])
)
def oncreatechatcompletion(req: https_fn.Request) -> https_fn.Response:
    import create_chatcompletion
    return https_fn.Response(create_chatcompletion.main(req))

@https_fn.on_request(
    cors=options.CorsOptions(cors_origins="*", cors_methods=["get", "post"])
)
def on_create_copywriting(req: https_fn.Request) -> https_fn.Response:
    import create_copywriting
    return https_fn.Response(create_copywriting.main(req))