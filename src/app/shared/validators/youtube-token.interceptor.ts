import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"

@Injectable()
export class YoutubeInterceptorsToken implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  const { url } = req
  const token = `&key=${environment.YOUTUBE_API_KEY}`
  const newRequest = req.clone({url: url + token})
  return next.handle(newRequest)
  }
}
