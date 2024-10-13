<template>
  <div class="bg-slate-300 flex items-center justify-center h-[100vh]">
    <div>
      <header class="mb-2">
        <h1 class="font-bold uppercase text-3xl">Tracker app</h1>
      </header>

      <main class="rounded-md bg-white w-[500px] p-3">
        <div class="flex  gap-10 items-center justify-between gap-1.5">
	        <div
		        class="self-start w-full"
	        >
		        <label
			        class="font-bold text-xl"
			        for="task_name"
		        >
			        Name
		        </label>

		        <input
			        v-model="currentTask.name"
			        id="task_name"
			        class="px-2 outline-none w-full bg-transparent border-2 border-primary-300 rounded-md border-black mb-4"
		        />

		        <label
		          class="font-bold text-xl"
		          for="task_description"
		        >
			        Description
		        </label>

		        <textarea
		          v-model="currentTask.description"
		          id="task_description"
		          class="px-2 outline-none w-full bg-transparent border-2 border-primary-300 rounded-md border-black"
		        />
	        </div>

          <div>
            <b class="text-3xl">
	            <time-view
		            :raw-value="currentTask.time"
	            />
            </b>

	          <div class="mt-2 flex items-center justify-center gap-2">
		          <button
			          @click="runCurrentTask"
			          :disabled="!currentTask.specific.isPaused"
			          class="disabled:cursor-not-allowed disabled:opacity-25 bg-primary-300 hover:bg-primary-500 flex items-center text-3xl rounded-full bg-gray-100 hover:bg-gray-200 transition"
		          >
			          <icon
				          name="i-material-symbols:play-arrow"
			          />
		          </button>

		          <button
			          @click="pauseCurrentTask"
			          :disabled="currentTask.specific.isPaused"
			          class="disabled:cursor-not-allowed disabled:opacity-25 bg-primary-300  hover:bg-primary-400 flex items-center rounded-full text-3xl bg-gray-100 hover:bg-gray-200 transition"
		          >
			          <icon
				          name="i-material-symbols:pause"
			          />
		          </button>

		          <button
			          v-if="!!currentTask.time || !currentTask.specific.isPaused"
			          @click="finishCurrentTask"
			          class="disabled:cursor-not-allowed disabled:bg-opacity-25  hover:bg-primary-400 text-3xl bg-primary-300 flex items-center rounded-full bg-gray-100 transition"
		          >
			          <icon
				          name="i-material-symbols:stop"
			          />
		          </button>
	          </div>
          </div>
        </div>

        <div class="mt-3 max-h-[300px] overflow-y-auto pr-2">
          <div
            v-for="task in finishedTasks"
            :key="task._id"
            class="odd:bg-primary-400 even:bg-primary-600 first:rounded-t-md last:rounded-b-md text-white p-3 px-2 w-full"
          >
            <div class="flex items-center justify-between">
              <div class="flex flex-col">
                <b class="text-xl">
                  {{ task.name }}
                </b>

                <span>
                  {{ task.description }}
                </span>
              </div>

              <div>
	              <time-view
		              :raw-value="task.time"
	              />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script
	setup
	lang="ts"
>
  import {
		reactive
  } from '#imports'

  import TimeView from '@/components/TimeView.vue'

  import type {
		Task,
	  Session
	} from '@/types'

  const finishedTasks = reactive<Task[]>([])
  const currentTask = ref<Task>(
    getNewTask()
  )

  const timerId = ref<null | ReturnType<typeof setTimeout>>(null)

  function getNewTask(): Task {
    return {
      _id: Math.random().toString(32),
      name: `Unnamed #${finishedTasks.length} `,
      description: '',
      time: 0,
	    dtStart: new Date()
		    .toISOString(),
	    dtEnd: null,
	    _tags: [],
	    specific: {
				isFinished: false,
		    isPaused: true,
		    sessions: [],
	    }
    }
  }

  function runCurrentTask() {
    currentTask.value.specific.isPaused = false

	  const session: Session = {
			dtStart: new Date()
				.toISOString(),
		  dtEnd: null,
		  duration: 0,
	  }

		currentTask.value.specific.sessions
			.push(
				session
			)

    timerId.value = setInterval(
      () => {
        runTimer(currentTask.value)
      },
      1000
    )
  }

  function runTimer(task: Task) {
    task.time++
  }

  function pauseCurrentTask() {
		stopCurrentTimer()

	  const lastSessionIndex = currentTask.value.specific.sessions.length - 1;
		const lastSession = currentTask.value.specific.sessions[lastSessionIndex]

	  lastSession.dtEnd = new Date()
		  .toISOString()

	  lastSession.duration = calculateSessionDuration(lastSession.dtStart, lastSession.dtEnd)

    currentTask.value.specific.isPaused = true;
  }

  function finishCurrentTask() {
		stopCurrentTimer()

    finishedTasks.push(currentTask.value)

	  currentTask.value = getNewTask()
  }

	function stopCurrentTimer() {
		// There is nothing to stop
		if (!timerId.value) {
			return false
		}

		clearInterval(timerId.value)

		return true
	}

	function calculateSessionDuration(start: string, end: string) {
		const dtStart = new Date(start);
		const dtEnd = new Date(end)

		// If we have NaN date => we are not able to calculate the session duration
		// Just throw an error
		if (
			isNaN(dtStart.getTime())
			|| isNaN(dtEnd.getTime())
		) {
			throw Error('Session have invalid date')
		}

		const startInMs = dtStart
			.valueOf()

		const endInMs = dtEnd
			.valueOf()

		const sessionDurationInMs = endInMs - startInMs

		return sessionDurationInMs / 1000
	}
</script>

<style>
</style>
