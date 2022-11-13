import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreStateService } from "../state.service";

interface LoadingState {
  loading: boolean
}

const initialState: LoadingState = {
  loading: false
};

@Injectable({ providedIn: 'root' })
export class LoaderService extends CoreStateService<LoadingState>{
  loading$: Observable<boolean> = this.select(state => state.loading);
  constructor() {
    super(initialState)
  }

  setLoading(loading: boolean) {
    this.setState({ loading: loading })
  }
}