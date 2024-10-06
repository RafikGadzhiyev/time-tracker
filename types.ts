export type Task = {
  _id: string
  name: string
  description: string
  time: number
  specific: TaskSpecific
  dtStart: string
  dtEnd: string | null
  _tags: string[]
}

export type Session = {
  dtStart: string
  dtEnd: string | null
  duration: number
}

type TaskSpecific = {
  isPaused: boolean
  isFinished: boolean
  sessions: Session[]
}
